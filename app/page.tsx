'use client'

import { useState, useEffect, useRef, cloneElement } from 'react';
import dynamic from 'next/dynamic';

// Client Components:
const About= dynamic(() => import('./about/page'));
const Projects = dynamic(() => import('./projects/page'));
const Education = dynamic(() => import('./education/page'));
const Work = dynamic(() => import('./work/page'));
const pages = 
[
  { id: 1, component: About},
  { id: 2, component: Projects},
  { id: 3, component: Education},
  { id: 4, component: Work}
];

// Intersection Observer Options
const options = 
{
  root: null,
  rootMargin: "0px 0px 500% 0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

export default function Home() 
{
  //const [showMore, setShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [loadedPages, setLoadedPages] = useState([]);
  const [loading, setLoading] = useState(false);

  const observerTarget = useRef<HTMLDivElement>(null);

  const loadNextPage = () => {
    const nextPage = currentPage + 1;
    if (loading || nextPage > pages.length) return;

    setLoading(true);
    setLoadedPages(prevPages => [...prevPages, pages.find(p => p.id === nextPage).component]);
    setCurrentPage(nextPage);
    setLoading(false);  
  }
  // useEffect to access the the IntersectionObserver from the browser API
  useEffect(() => { 
    if (!observerTarget.current) return;

    const observer = new IntersectionObserver(
      (entries) => 
        {
          if (entries[0].isIntersecting && !loading && currentPage < pages.length) loadNextPage();
        }, 
        { threshold: 0.1 }
      );

      observer.observe(observerTarget.current);

      // Clean up for multiple 
      return () => {
        observer.disconnect();
      };
  }, [currentPage, loading]);

  return (
    <div className="flex flex-col w-full dark:bg-white">

      {/* Testing infinite scroll loading */}
      <div className="infinite-scroll-items">
        {loadedPages.map((loadedPage, index) => {
            const ComponentToRender = loadedPage;
            return <ComponentToRender key={index} />;
          }
        )}
      </div>

      <div 
        ref={observerTarget} 
        className="infinite-scroll-trigger flex items-center justify-center"
      >
        {loading && (
          <div className="loading-spinner animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        )}
      </div>
    </div>
  )
}
