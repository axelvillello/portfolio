'use client'

import EducationProp from "../_components/EducationProp.tsx"

export default function Education() {
  return (
    <div className="flex flex-col flex-1 h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white snap-start">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start ">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-lg text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Education
            </h1>
            <div className="max-w-lg text-lg text-zinc-600 dark:text-zinc-400 overflow-y-auto">
              <EducationProp
                award="Bachelor of Information Technology"
                institution="The University of Newcastle"
                awardDate="December 2025"
              />

              <EducationProp
                award="Higher School Certificate"
                institution="Maitland High School"
                awardDate="September 2017"
              />
            </div>
        </div>
      </main>
    </div>
  );
}
