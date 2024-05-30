import Nav from '@/ui/nav';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
const ThemeSelector = dynamic(() => import('@/components/ThemeSelector'), {
  ssr: false,
});
const Header = () => {
  const theme = cookies().get('x-theme')?.value;
  return (
    <div>
      <Nav />
      <ThemeSelector theme={theme === 'dark' ? 'dark' : 'light'} />
    </div>
  );
};
export default Header;
