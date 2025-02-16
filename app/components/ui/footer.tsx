import Nav from '@/components/ui/nav';
import Logo from '@/components/ui/logo';

export default function Footer() {
  return (
    <footer className="flex flex-row text-left text-sm text-gray-400">
      <div className="mr-6 flex flex-row items-center text-gray-400">
        <span className="mr-4">&copy;{new Date().getFullYear()}</span>
        <Logo fontSize="text-sxs" />
      </div>
      <span className="text-gray-300 dark:text-gray-600">•</span>
      <div className="ml-6">
        <Nav />
      </div>
    </footer>
  );
}
