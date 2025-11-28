'use client';

import { useAppContext } from '@/contexts/app-context';
import { useWindData } from '@/hooks/use-wind-data';
import { convertSpeed } from '@/lib/conversions';
import { Skeleton } from '../ui/skeleton';
import { CreditsCard } from './credits';
import { CurrentSpeed } from './current-speed';
import { SpeedChart } from './speed-chart';
import { StatsCards } from './stats-cards';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { AlertCircle } from 'lucide-react';

export function Dashboard() {
  const { latest, history, stats, loading, error } = useWindData();
  const { unit } = useAppContext();

  if (loading) {
    return (
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-12">
        <div className="grid gap-4 lg:col-span-7">
          <Skeleton className="h-[220px] w-full" />
        </div>
        <div className="grid gap-4 lg:col-span-5">
          <Skeleton className="h-[220px] w-full" />
        </div>
        <div className="grid gap-4 lg:col-span-12">
          <Skeleton className="h-[300px] w-full" />
        </div>
        <div className="grid gap-4 lg:col-span-12">
          <Skeleton className="h-[180px] w-full" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
       <Alert variant="destructive" className="max-w-2xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
    )
  }

  const convertedSpeed =
    latest?.windSpeed != null ? convertSpeed(latest.windSpeed, unit) : null;
  const convertedStats = {
    avg: stats.avg != null ? convertSpeed(stats.avg, unit) : null,
    min: stats.min != null ? convertSpeed(stats.min, unit) : null,
    max: stats.max != null ? convertSpeed(stats.max, unit) : null,
  };
  const convertedHistory = history.map((entry) => ({
    ...entry,
    speed: convertSpeed(entry.speed, unit),
  }));

  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-12">
      <div className="grid gap-4 lg:col-span-7">
        <CurrentSpeed speed={convertedSpeed} unit={unit} />
      </div>
      <div className="grid gap-4 lg:col-span-5">
        <StatsCards stats={convertedStats} unit={unit} />
      </div>
      <div className="grid gap-4 lg:col-span-12">
        <SpeedChart history={convertedHistory} unit={unit} />
      </div>
      <div className="grid gap-4 lg:col-span-12">
        <CreditsCard />
      </div>
    </div>
  );
}
