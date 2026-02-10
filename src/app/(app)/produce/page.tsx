import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { produce } from '@/lib/data';
import { columns } from '@/components/produce/produce-columns';
import { DataTable } from '@/components/produce/data-table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ProducePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-bold tracking-tight font-headline">
            Produce Tracking
            </h1>
            <p className="text-muted-foreground">
            Manage and track all farm produce from harvest to market.
            </p>
        </div>
        <Button asChild>
          <Link href="/produce/register">
            <PlusCircle className="mr-2 h-4 w-4" /> Register New Produce
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Produce</CardTitle>
          <CardDescription>
            A list of all produce registered in the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable 
            columns={columns} 
            data={produce} 
            filterColumnId="name" 
            filterPlaceholder="Filter by produce name..."
          />
        </CardContent>
      </Card>
    </div>
  );
}
