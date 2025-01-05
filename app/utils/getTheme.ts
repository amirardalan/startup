import { cookies } from 'next/headers';

export function getTheme() {
  let theme = cookies().get('x-theme')?.value;

  if (!theme || theme === 'system') {
    const systemTheme = cookies().get('x-system-theme')?.value;
    theme = systemTheme === 'dark' ? 'dark' : 'light';
  } else if (theme !== 'dark') {
    theme = 'light';
  }

  return theme;
}
