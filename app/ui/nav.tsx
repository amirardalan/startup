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
        <button className="z-30 lg:hidden" onClick={toggleMenu}>
          <svg
            viewBox="0 0 24 24"
            className={clsx('menu h-8 w-8 fill-dark dark:fill-light')}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z"
              fillRule="nonzero"
            />
          </svg>
        </button>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-sm lg:hidden"
          onClick={toggleMenu}
        />
      )}
      <div
        className={clsx(
          'fixed right-0 top-0 z-20 flex h-full w-64 transform flex-col overflow-auto border-l-2 border-solid border-dark bg-light pl-10 pt-20 transition-transform duration-200 ease-in-out lg:static lg:w-auto lg:translate-x-0 lg:flex-row lg:border-none lg:p-0 dark:border-light dark:bg-dark',
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
