'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="flex justify-end bg-black text-white">
      <ul className="flex flex-row">
        <li className="mr-6">
          <Link href="/" className={pathname === '/' ? 'text-primary' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === '/about' ? 'text-primary' : ''}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
