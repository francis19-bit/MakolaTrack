import Link from 'next/link';
import { Leaf } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { produce } from '@/lib/data';
import { ProduceCard } from '@/components/market/produce-card';

export default function HomePage() {
    const availableProduce = produce.filter(p => p.status === 'At Market' || p.status === 'Sold');
  return (
    <div className="bg-background min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-7 w-7 text-primary" />
            <span className="text-xl font-semibold font-headline">
              MakolaTrack
            </span>
          </Link>
          <nav>
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
                Login / Register
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight font-headline md:text-4xl">
            Makola Market Produce
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Browse fresh produce currently available at the market.
          </p>
        </div>
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
            {availableProduce.map(item => (
                <ProduceCard key={item.id} produce={item} />
            ))}
        </div>
      </main>
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground md:px-6">
            <p>&copy; {new Date().getFullYear()} MakolaTrack. An academic project.</p>
        </div>
      </footer>
    </div>
  );
}
