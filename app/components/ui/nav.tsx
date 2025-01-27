'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

export default function Navigation() {
  const pathname = usePathname();

  const getNavItemClass = (href: string, isLast?: boolean) => {
    return clsx('text-dark dark:text-light', {
      'text-primary dark:text-primary': pathname === href,
      'mr-6': !isLast,
    });
  };

  return (
    <nav className={clsx('flex justify-end dark:bg-dark')}>
      <div
        className={clsx(
          'fixed right-0 top-0 flex h-full w-64 translate-x-0 transform flex-col overflow-auto border-l-2 border-solid border-dark bg-light pl-10 pt-20 lg:static lg:w-auto lg:translate-x-0 lg:flex-row lg:border-none lg:p-0 dark:border-light dark:bg-dark'
        )}
      >
        <Link href="/">
          <span className={getNavItemClass('/')}>Home</span>
        </Link>
        <Link href="/about">
          <span className={getNavItemClass('/about')}>About</span>
        </Link>
      </div>
    </nav>
  );
}
