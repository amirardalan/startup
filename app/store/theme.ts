import { create } from 'zustand';
import { Theme } from '@/types/theme';

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useTheme = create<ThemeStore>((set) => ({
  theme: 'light',
  setTheme: (theme) => set(() => ({ theme })),
}));
