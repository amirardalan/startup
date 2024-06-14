import Navigation from '@/ui/nav';

export default function Footer() {
  return (
    <footer className="flex flex-row py-4 text-left text-sm text-dark dark:text-light">
      <div className="mr-6 text-gray-400">
        &copy; {new Date().getFullYear()} Startup{' '}
      </div>
      <span className="text-gray-600">|</span>{' '}
      <div className="ml-6">
        <Navigation />
      </div>
    </footer>
  );
}
