import { auth, signIn } from '@/auth';
import Image from 'next/image';

export default async function Account() {
  const session = await auth();

  return (
    <>
      {session ? (
        <div className="mt-8">
          <h2 className="mb-6 border-b-2 border-solid border-gray-300 pb-4 text-xxl text-dark dark:border-gray-600 dark:text-light">
            Account
          </h2>
          <h3 className="text-s text-dark dark:text-light">
            {session?.user?.name}&apos;s Profile
          </h3>
          <div className="mt-4">
            <Image
              src={session?.user?.image ?? '/default-avatar.png'}
              alt="Profile"
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
        </div>
      ) : (
        <div className="flex h-[80vh] flex-row items-center justify-center text-dark dark:text-light">
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
