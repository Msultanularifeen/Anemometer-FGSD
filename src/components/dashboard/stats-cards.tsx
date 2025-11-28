'use client';

import { BarChart, TrendingDown, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import type { SpeedUnit } from '@/contexts/app-context';
import { cn } from '@/lib/utils';

interface Stats {
  avg: number | null;
  min: number | null;
  max: number | null;
}

interface StatsCardsProps {
  stats: Stats;
  unit: SpeedUnit;
}

const StatCard = ({
  title,
  value,
  unit,
  Icon,
  className,
}: {
  title: string;
  value: number | null;
  unit: string;
  Icon: React.ElementType;
  className?: string;
}) => (
  <Card className={cn('shadow-lg', className)}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl font-bold">
          {value !== null ? value.toFixed(1) : '--'}
        </span>
        <span className="text-sm text-muted-foreground">{unit}</span>
      </div>
    </CardContent>
  </Card>
);

export function StatsCards({ stats, unit }: StatsCardsProps) {
  return (
    <>
      <StatCard
        title="Avg Speed (1h)"
        value={stats.avg}
        unit={unit}
        Icon={BarChart}
      />
      <StatCard
        title="Max Speed (1h)"
        value={stats.max}
        unit={unit}
        Icon={TrendingUp}
      />
      <StatCard
        title="Min Speed (1h)"
        value={stats.min}
        unit={unit}
        Icon={TrendingDown}
      />
    </>
  );
}
