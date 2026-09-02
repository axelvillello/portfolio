'use client'

import WorkProp from "../_components/WorkProp.tsx"

export default function Work() {
  return (
    <div className="flex flex-col flex-1 h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white snap-start">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start overflow-y-auto">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-lg text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Work Experience
            </h1>
            <div className="max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
                <WorkProp
                  role="Junior Developer Intern"
                  company="The Science and Engineering Challenge"
                  startDate="April 2025"
                  endDate="December 2025"
                  items={[
                    "Collaborated with stakeholders to determine project deliverables",
                    "Rapidly onboarded to Unity and C# codebase",
                    "Delivered features within sprint deadlines using problem solving"
                  ]}
                />

                <WorkProp
                  role="Retail Associate"
                  company="Sunglass Hut"
                  startDate="October 2024"
                  endDate="October 2025"
                  items={[
                    "Applied customer service to build rapport and resolve customer complaints",
                    "Enforced and adhered to both company and legal policies"
                  ]}
                />

                <WorkProp
                  role="Team Member"
                  company="T2 Tea"
                  startDate="October 2022"
                  endDate="February 2024"
                  items={[
                    "Trained and guided junior staff members",
                    "Collaborated with team members to achieve KPIs"
                  ]}
                />
            </div>
        </div>
      </main>
    </div>
  );
}
