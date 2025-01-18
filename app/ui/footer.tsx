import Nav from '@/ui/nav';

export default function Footer() {
  return (
    <footer className="flex flex-row text-left text-sm text-dark dark:text-light">
      <div className="mr-6 text-gray-400">
        &copy; {new Date().getFullYear()} Startup{' '}
      </div>
      <span className="hidden text-gray-600 lg:block">|</span>{' '}
      <div className="ml-6">
        <Nav />
      </div>
    </footer>
  );
}
