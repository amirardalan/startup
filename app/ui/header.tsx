// Header.tsx
import Nav from '@/ui/nav';
import dynamic from 'next/dynamic';
import SetTheme from '@/components/SetTheme';
const ThemeSelector = dynamic(() => import('@/components/ThemeSelector'), {
  ssr: false,
});

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between py-4">
      <div className="z-10">
        <ThemeSelector />
      </div>
      <div className="flex flex-grow justify-end">
        <Nav showMobileButton />
      </div>
      <SetTheme />
    </div>
  );
}
