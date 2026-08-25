
export default function Education() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-sm text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Education
            </h1>
            <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            List of education.
            </p>
        </div>
      </main>
    </div>
  );
}
