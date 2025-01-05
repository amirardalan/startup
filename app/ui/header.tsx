// Header.tsx
import Nav from '@/ui/nav';
import dynamic from 'next/dynamic';
import SetTheme from '@/components/SetTheme';
const ThemeSelector = dynamic(() => import('@/components/ThemeSelector'), {
  ssr: false,
});

export default function Header() {
  return (
    <div>
      <Nav showMobileButton />
      <ThemeSelector />
      <SetTheme />
    </div>
  );
}
