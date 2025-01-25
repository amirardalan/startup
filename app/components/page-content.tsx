'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function PageContent() {
  const pageName = usePathname().slice(1);

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
      <div className="text-center font-mono text-3xl capitalize text-gray-400">
        {!pageName || `${pageName} —`} Startup()
      </div>
      <div className="font-serif text-lg italic text-gray-600">
        A Nextjs App Router Starter
      </div>
    </div>
  );
}
