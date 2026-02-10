'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { produce } from '@/lib/data';
import type { ProduceCategory } from '@/lib/definitions';

const getChartData = () => {
  const categoryCounts: Record<ProduceCategory, number> = {
    Vegetables: 0,
    Grains: 0,
    Fruits: 0,
    Tubers: 0,
  };

  produce.forEach((p) => {
    if (p.category in categoryCounts) {
      categoryCounts[p.category] += 1;
    }
  });

  return Object.entries(categoryCounts).map(([name, total]) => ({
    name,
    total,
  }));
};

const chartConfig = {
  total: {
    label: 'Total',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function ProduceChart() {
  const data = getChartData();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Produce by Category</CardTitle>
        <CardDescription>
          A summary of all registered produce items by their category.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={data}
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
              />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip
                cursor={{ fill: 'hsl(var(--muted))' }}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="total"
                fill="var(--color-total)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
