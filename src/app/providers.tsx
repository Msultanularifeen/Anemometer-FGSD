'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { AppContextProvider } from '@/contexts/app-context';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AppContextProvider>{children}</AppContextProvider>
    </ThemeProvider>
  );
}
