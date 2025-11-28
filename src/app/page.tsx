import { Dashboard } from '@/components/dashboard/dashboard';
import { Header } from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 lg:p-8">
        <Dashboard />
      </main>
      <Toaster />
    </div>
  );
}
