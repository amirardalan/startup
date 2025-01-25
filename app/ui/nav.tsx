'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

interface NavigationProps {
  showMobileButton?: boolean;
}

export default function Navigation({ showMobileButton }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getNavItemClass = (href: string, isLast?: boolean) => {
    return clsx('text-dark dark:text-light', {
      'text-primary dark:text-primary': pathname === href,
      'mr-6': !isLast,
    });
  };

  return (
    <nav className={clsx('flex justify-end dark:bg-dark')}>
      {showMobileButton && (
        <button className="z-30 lg:hidden" onClick={toggleMenu}>
          <svg
            viewBox="0 0 24 24"
            className={clsx('menu h-8 w-8 fill-dark dark:fill-light')}
          >
            Mobile Nav Button
          </svg>
        </button>
      )}
      <div
        className={clsx(
          'fixed right-0 top-0 flex h-full w-64 translate-x-0 transform flex-col overflow-auto border-l-2 border-solid border-dark bg-light pl-10 pt-20 transition-transform duration-200 ease-in-out lg:static lg:w-auto lg:translate-x-0 lg:flex-row lg:border-none lg:p-0 dark:border-light dark:bg-dark',
          {
            'translate-x-full': !isOpen,
          }
        )}
      >
        <Link href="/">
          <span className={getNavItemClass('/')}>Home</span>
        </Link>
        <Link href="/about">
          <span className={getNavItemClass('/about')}>About</span>
        </Link>
        {session ? (
          <Link href="/logout">
            <span className={getNavItemClass('/logout', true)}>Logout</span>
          </Link>
        ) : (
          <Link href="/login">
            <span className={getNavItemClass('/login', true)}>Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
