import { signOut } from '@/auth';

export default function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({ redirect: true, redirectTo: '/login' });
      }}
    >
      <button
        type="submit"
        className="m-0 rounded-md bg-dark p-3 font-mono text-light dark:bg-light dark:text-dark"
      >
        Logout
      </button>
    </form>
  );
}
