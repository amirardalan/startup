import { cookies } from 'next/headers';

export function getTheme() {
  let theme = cookies().get('x-theme')?.value;
  console.log('x-theme cookie:', theme);

  if (!theme || theme === 'system') {
    const systemTheme = cookies().get('x-system-theme')?.value;
    console.log('x-system-theme cookie:', systemTheme);
    theme = systemTheme === 'dark' ? 'dark' : 'light';
  } else if (theme !== 'dark') {
    theme = 'light';
  }

  console.log('Final theme:', theme);
  return theme;
}
