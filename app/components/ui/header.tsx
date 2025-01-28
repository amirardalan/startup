import { auth } from '@/auth';
import ThemeMenu from '@/components/theme/theme-menu';
import AuthMenu from '@/app/components/auth/menu';

export default async function Header() {
  const session = await auth();

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="font-mono text-xxs uppercase text-dark dark:text-light">
        {session
          ? `Welcome, ${session?.user?.name?.split(' ')[0]}`
          : 'Welcome, Guest'}
      </div>
      <div className="flex">
        <div className="mr-6 mt-1 flex items-center align-middle">
          <ThemeMenu />
        </div>
        <div>
          <AuthMenu />
        </div>
      </div>
    </div>
  );
}
