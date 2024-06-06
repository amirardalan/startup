import { cookies } from 'next/headers';

export function getTheme() {
  let theme = cookies().get('x-theme')?.value;

  if (!theme || theme === 'system') {
    theme =
      cookies().get('x-system-theme')?.value === 'dark' ? 'dark' : 'light';
  } else if (theme !== 'dark') {
    theme = 'light';
  }

  return theme;
}
