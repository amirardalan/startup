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
      <div className={clsx('flex flex-row dark:bg-dark')}>
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
