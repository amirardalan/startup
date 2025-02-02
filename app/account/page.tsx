import { auth, signIn } from '@/auth';
import SignInButton from '@/components/auth/signin-button';

export default async function Account() {
  const session = await auth();

  return (
    <>
      {session ? (
        <div>
          <h1 className="mb-3 mt-4 border-b-2 border-solid border-gray-300 pb-2 text-xl text-dark dark:border-gray-600 dark:text-light">
            Account
          </h1>
          <h2 className="text-dark dark:text-light">
            {session?.user?.name}'s Account
          </h2>
        </div>
      ) : (
        <div className="flex h-screen flex-row items-center justify-center text-dark dark:text-light">
          <span>
            <button
              className="cursor-pointer text-dark underline dark:text-light"
              onClick={async () => {
                'use server';
                await signIn('github');
              }}
            >
              Sign in
            </button>
          </span>
          <span>&nbsp; to view your account.</span>
        </div>
      )}
    </>
  );
}
