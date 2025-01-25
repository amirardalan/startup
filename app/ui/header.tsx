import Nav from '@/ui/nav';
import SetTheme from '@/components/SetTheme';
import ThemeSelector from '@/components/ThemeSelector';
import { auth } from '@/auth';

export default async function Header() {
  const session = await auth();

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="z-40">
        <ThemeSelector />
      </div>
      <div className="ml-6 text-dark dark:text-light">
        {session
          ? `Welcome, ${session?.user?.name?.split(' ')[0]}`
          : 'Welcome, Guest'}
      </div>
      <div className="flex flex-grow justify-end">
        <Nav showMobileButton />
      </div>
      <SetTheme />
    </div>
  );
}
