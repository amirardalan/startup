import { signIn } from '@/auth';

export default function SignInButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github');
      }}
    >
      <button
        type="submit"
        className="text-xxs m-0 min-w-24 rounded-lg bg-dark px-2 py-1.5 font-mono uppercase text-light dark:bg-light dark:text-dark"
      >
        Sign in
      </button>
    </form>
  );
}
