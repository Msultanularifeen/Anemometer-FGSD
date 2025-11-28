'use client';

import { Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { SpeedUnit } from '@/contexts/app-context';

interface CurrentSpeedProps {
  speed: number | null;
  unit: SpeedUnit;
}

export function CurrentSpeed({ speed, unit }: CurrentSpeedProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Current Speed</CardTitle>
        <Wind className="h-5 w-5 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span
            key={speed}
            className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500 text-6xl font-bold tracking-tighter text-primary"
          >
            {speed !== null ? speed.toFixed(1) : '--'}
          </span>
          <span className="text-xl font-medium text-muted-foreground">
            {unit}
          </span>
        </div>
        <p className="pt-2 text-xs text-muted-foreground">
          Live data from the sensor.
        </p>
      </CardContent>
    </Card>
  );
}
