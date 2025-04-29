import { auth } from '@/lib/auth';

import SignInButton from '@/components/account/SignInButton';
import SignOutButton from '@/components/account/SignOutButton';

export default async function AuthMenu() {
  const session = await auth();

  return (
    <div className="flex flex-row text-left text-sm text-dark dark:text-light">
      {session?.user ? <SignOutButton /> : <SignInButton />}
    </div>
  );
}
