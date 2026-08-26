'use client'
 
import { useState } from 'react'
import dynamic from 'next/dynamic'
 
// Client Components:
const About= dynamic(() => import('./about/page'))
const Projects = dynamic(() => import('./projects/page'))
const Education = dynamic(() => import('./education/page'), { ssr: false }) //Client side loading only test

// Intersection Observer Options
const options = {
  root: null,
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

// Dummy callback function 
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    entry.boundingClientRect
    entry.intersectionRatio
    entry.intersectionRect
    entry.isIntersecting
    entry.rootBounds
    entry.target
    entry.time
  });
};

const observer = new IntersectionObserver(callback, options);

export default function Home() {
  const [showMore, setShowMore] = useState(false)
 
  return (
    <div className="flex flex-col w-full">
      {/* Load immediately, but in a separate client bundle */}
      <About />
 
      {/* Testing load on demand, only when/if the condition is met */}
      {showMore && <Projects />}
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowMore(!showMore)}>Toggle</button>
      </div>
 
      {/* Load only on the client side */}
      <Education />
    </div>
  )
}
