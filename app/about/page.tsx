export default function About() {
  return (
    <main>
      <div className="mt-8">
        <h2 className="mb-6 border-b-2 border-solid border-gray-300 pb-4 text-xxl text-dark dark:border-gray-600 dark:text-light">
          About
        </h2>
        <p className="text-dark dark:text-light">
          A Next.js App Router starter project with TypeScript, Tailwind,
          NextAuth, Prettier, and Dark Mode.
        </p>
        <p className="mt-2 text-dark dark:text-light">
          Built and maintained by{' '}
          <a
            href="https://x.com/amirardalan"
            rel="noopener noreferrer"
            target="_blank"
          >
            @amirardalan
          </a>
        </p>
      </div>
    </main>
  );
}
