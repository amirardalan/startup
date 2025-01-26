import { auth } from '@/auth';

import LoginButton from '@/components/auth/login-button';
import LogOutButton from '@/components/auth/logout-button';

export default async function Menu() {
  const session = await auth();

  return (
    <div className="flex flex-row text-left text-sm text-dark dark:text-light">
      {session?.user ? <LogOutButton /> : <LoginButton />}
    </div>
  );
}
