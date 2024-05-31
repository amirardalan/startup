import Nav from '@/ui/nav';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
const ThemeSelector = dynamic(() => import('@/components/ThemeSelector'), {
  ssr: false,
});

// TODO: Add a height and width to a wrapper div around the ThemeSelector component
// to prevent layout shift when the component loads.

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
