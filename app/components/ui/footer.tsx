import Nav from '@/components/ui/nav';

export default function Footer() {
  return (
    <footer className="flex flex-row text-left text-sm text-gray-400">
      <div className="mr-6 text-gray-400">
        &copy; {new Date().getFullYear()} Startup()
      </div>
      <span className="text-gray-300 dark:text-gray-600">|</span>
      <div className="ml-6">
        <Nav />
      </div>
    </footer>
  );
}
