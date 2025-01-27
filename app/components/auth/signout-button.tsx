import { signOut } from '@/auth';

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button
        type="submit"
        className="m-0 min-w-24 rounded-lg bg-dark px-2 py-1.5 font-mono text-light dark:bg-light dark:text-dark"
      >
        Sign out
      </button>
    </form>
  );
}
