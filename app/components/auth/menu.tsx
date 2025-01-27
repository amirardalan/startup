import { auth } from '@/auth';

import SignInButton from '@/components/auth/signin-button';
import SignOutButton from '@/components/auth/signout-button';

export default async function AuthMenu() {
  const session = await auth();

  return (
    <div className="flex flex-row text-left text-sm text-dark dark:text-light">
      {session?.user ? <SignOutButton /> : <SignInButton />}
    </div>
  );
}
