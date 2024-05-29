import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
const ThemeSelector = dynamic(() => import('@/components/ThemeSelector'), {
  ssr: false,
});
const Header = () => {
  const theme = cookies().get('x-theme')?.value;
  return (
    <nav>
      <ThemeSelector theme={theme === 'dark' ? 'dark' : 'light'} />
    </nav>
  );
};
export default Header;
