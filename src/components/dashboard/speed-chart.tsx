'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import type { SpeedUnit } from '@/contexts/app-context';
import type { HistoryEntry } from '@/hooks/use-wind-data';
import { useTheme } from 'next-themes';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

interface SpeedChartProps {
  history: HistoryEntry[];
  unit: SpeedUnit;
}

const chartConfig = {
  speed: {
    label: 'Wind Speed',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export function SpeedChart({ history, unit }: SpeedChartProps) {
  const chartData = history.map((entry) => ({
    time: new Date(entry.timestamp * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
    speed: parseFloat(entry.speed.toFixed(1)),
  }));

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Wind Speed History</CardTitle>
        <CardDescription>
          Showing data from the last 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 20, left: -10, bottom: 0 }}
            accessibilityLayer
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value, index) => {
                if (chartData.length > 20 && index % Math.floor(chartData.length / 10) !== 0) return '';
                return value;
              }}
              style={{
                fontSize: '0.75rem',
              }}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}`}
              unit={` ${unit}`}
              style={{
                fontSize: '0.75rem',
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  labelFormatter={(label, payload) =>
                    `Time: ${payload[0]?.payload.time}`
                  }
                  formatter={(value) => `${value} ${unit}`}
                />
              }
            />
            <defs>
              <linearGradient id="fillSpeed" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="speed"
              type="natural"
              fill="url(#fillSpeed)"
              stroke="hsl(var(--primary))"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
