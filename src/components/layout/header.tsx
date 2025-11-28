import { Wind } from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';
import { UnitSelector } from '../unit-selector';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <div className="flex items-center gap-2">
        <Wind className="h-6 w-6 text-primary" />
        <h1 className="text-xl font-bold tracking-tight text-foreground">
          AERON
        </h1>
      </div>
      <div className="ml-auto flex items-center gap-2 md:gap-4">
        <UnitSelector />
        <ThemeToggle />
      </div>
    </header>
  );
}
