'use client';
import Image from 'next/image';

export default function PageContent() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="mb-6 flex w-full justify-center">
        <Image
          src="/images/favicon-dark.png"
          alt="Logo"
          width={128}
          height={128}
          className="flex justify-center"
          priority
        />
      </div>
      <div className="mt-2 font-mono text-lg text-gray-600 dark:text-gray-500">
        A Nextjs App Router Starter
      </div>
      <div className="text-s mt-5 font-sans text-gray-600 dark:text-gray-500">
        By{' '}
        <a
          href="https://github.com/amirardalan"
          rel="noopener noreferrer"
          target="_blank"
        >
          @amirardalan
        </a>
      </div>
    </div>
  );
}
