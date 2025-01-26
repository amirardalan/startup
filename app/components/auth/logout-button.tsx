import { signOut } from '@/auth';

export default function LogOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button
        type="submit"
        className="m-0 rounded-md bg-dark px-2 py-1.5 font-mono text-light dark:bg-light dark:text-dark"
      >
        Logout
      </button>
    </form>
  );
}
