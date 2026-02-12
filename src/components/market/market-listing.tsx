'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import type { Produce } from '@/lib/definitions';
import { ProduceCard } from '@/components/market/produce-card';

export function MarketListing({ produce }: { produce: Produce[] }) {
  // In a real app, you'd use state to filter the produce
  // For now, we just display what's passed in.

  return (
    <>
      <div className="my-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Input placeholder="Search for produce..." className="max-w-xs" />
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Vegetables">Vegetables</SelectItem>
            <SelectItem value="Grains">Grains</SelectItem>
            <SelectItem value="Fruits">Fruits</SelectItem>
            <SelectItem value="Tubers">Tubers</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {produce.map((item) => (
          <ProduceCard key={item.id} produce={item} />
        ))}
      </div>
    </>
  );
}
