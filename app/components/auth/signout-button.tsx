'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await signOut({
          callbackUrl: '/',
        });
      }}
    >
      <button
        type="submit"
        className="text-xxs m-0 min-w-24 rounded-lg bg-dark px-2 py-1.5 font-mono uppercase text-light dark:bg-light dark:text-dark"
      >
        Sign Out
      </button>
    </form>
  );
}
