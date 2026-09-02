'use client'

import ProjectProp from "../_components/ProjectProp.tsx"

export default function Projects() {
  return (
    <div className="flex flex-col flex-1 h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white snap-start">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start overflow-y-auto">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-lg text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Projects
            </h1>
            <div className="max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
              <ProjectProp
                title="Bullet Cat"
                status="Ongoing"
                technologyItems={[
                  "TypeScript",
                  "Phaser 4",
                  "Tailwind CSS"
                ]}
                featureItems={[
                  "Top-down shooting game designed for browsers",
                  "Fight off surreal, Dadaist monsters in a mysterious labyrinth"
                ]}
              />

              <ProjectProp
                title="ElectraCity"
                status="Complete"
                technologyItems={[
                  "C#",
                  "Unity 4"
                ]}
                featureItems={[
                  "Continuation of a 2D Unity project developed in C#",
                  "Redesigned UI and menu navigation to improve usability and accessibility"
                ]}
              />

              <ProjectProp
                title="Digital Storefront"
                status="On-going"
                technologyItems={[
                  "JavaScript",
                  "React",
                  "Axios"
                ]}
                featureItems={[
                  "Developed front-end React application and integrated using a RESTful API",
                  "Designed application to allow users to search products, add to cart and checkout",
                  "Included safe account creation of customers and site administration users"
                ]}
              />

              <ProjectProp
                title="Curator"
                status="On-going"
                technologyItems={[
                  "C#",
                  ".NET MAUI",
                  "SQLite"
                ]}
                featureItems={[
                  "Implemented in C# utilising the .NET MAUI framework to run on Android devices",
                  "Developed a personal task scheduling tool which displays higher priority tasks",
                  "Features a delay function to push back a task in-case of unforeseen events"
                ]}
              />
            </div>
        </div>
      </main>
    </div>
  );
}
