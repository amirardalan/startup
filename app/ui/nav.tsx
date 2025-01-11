'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

interface NavigationProps {
  showMobileButton?: boolean;
}

export default function Navigation({ showMobileButton }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={clsx('flex justify-end dark:bg-dark')}>
      {showMobileButton && (
        <button className="z-10 lg:hidden" onClick={toggleMenu}>
          <svg
            viewBox="0 0 20 20"
            className={clsx('menu h-6 w-6 fill-dark dark:fill-light')}
          >
            <path
              fillRule="evenodd"
              d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      {isOpen && (
        <div
          className="z-1 fixed inset-0 bg-transparent lg:hidden"
          onClick={toggleMenu}
        />
      )}
      <div
        className={clsx(
          'fixed right-0 top-0 flex h-full w-64 transform flex-col overflow-auto border-l-2 border-solid border-dark bg-light pl-10 pt-20 transition-transform duration-200 ease-in-out lg:static lg:w-auto lg:translate-x-0 lg:flex-row lg:border-none lg:p-0 dark:border-light dark:bg-dark',
          {
            'translate-x-full': !isOpen,
            'translate-x-0': isOpen,
          }
        )}
      >
        <ul className="flex flex-col lg:flex-row">
          <li className="mr-6">
            <Link
              href="/"
              className={clsx('text-dark dark:text-light', {
                'text-primary dark:text-primary': pathname === '/',
              })}
              onClick={toggleMenu}
            >
              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={clsx('text-dark dark:text-light', {
                'text-primary dark:text-primary': pathname === '/about',
              })}
              onClick={toggleMenu}
            >
              <div>About</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
