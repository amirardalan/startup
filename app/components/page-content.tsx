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
      <div className="mt-2 font-serif text-lg italic text-gray-600">
        A Nextjs App Router Starter
      </div>
      <div className="mt-5 font-sans text-xxs text-dark dark:text-light">
        By Amir Ardalan
      </div>
    </div>
  );
}
