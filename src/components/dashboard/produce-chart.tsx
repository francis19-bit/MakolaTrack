'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartTooltipContent } from '@/components/ui/chart';
import { produce } from '@/lib/data';
import type { ProduceCategory } from '@/lib/definitions';

const getChartData = () => {
    const categoryCounts: Record<ProduceCategory, number> = {
        Vegetables: 0,
        Grains: 0,
        Fruits: 0,
        Tubers: 0,
    };

    produce.forEach(p => {
        if (p.category in categoryCounts) {
            categoryCounts[p.category] += 1;
        }
    });

    return Object.entries(categoryCounts).map(([name, total]) => ({ name, total }));
}

export function ProduceChart() {
    const data = getChartData();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Produce by Category</CardTitle>
        <CardDescription>A summary of all registered produce items by their category.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<ChartTooltipContent />} />
                <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
