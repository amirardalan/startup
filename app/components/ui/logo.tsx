import Link from 'next/link';

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/">
        <h1 className="font-serif text-xxl text-dark dark:text-light">
          Startup()
        </h1>
      </Link>
    </div>
  );
}
