import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
const ThemeSelector = dynamic(() => import('@/components/ThemeSelector'), {
  ssr: false,
});
const Header = () => {
  const theme = cookies().get('x-theme')?.value;
  return (
    <nav className="border-b border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <ThemeSelector theme={theme === 'dark' ? 'dark' : 'light'} />
    </nav>
  );
};
export default Header;
