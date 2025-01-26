import { signIn } from '@/auth';

export default function LogInButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github');
      }}
    >
      <button
        type="submit"
        className="m-0 rounded-md bg-dark px-2 py-1.5 font-mono text-light dark:bg-light dark:text-dark"
      >
        Login (GitHub)
      </button>
    </form>
  );
}
