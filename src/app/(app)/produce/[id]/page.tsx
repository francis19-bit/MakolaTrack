'use client';

import { produce } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronLeft, Save } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { StatusTimeline } from '@/components/produce/status-timeline';
import { useToast } from '@/hooks/use-toast';

export default function ProduceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { toast } = useToast();
  const item = produce.find((p) => p.id === params.id);

  if (!item) {
    notFound();
  }
  
  const handleStatusUpdate = () => {
    toast({
        title: "Status Updated",
        description: "The produce status has been successfully updated.",
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="h-7 w-7" asChild>
          <Link href="/produce">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight font-headline">
            {item.name}
          </h1>
          <p className="text-muted-foreground">Tracking ID: {item.id}</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Produce Information</CardTitle>
              <CardDescription>
                Detailed information about this produce batch.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Category</h3>
                  <p>{item.category}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Quantity</h3>
                  <p>{item.quantity} {item.category === 'Grains' || item.category === 'Tubers' ? 'kg' : 'boxes'}</p>
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Farmer</h3>
                  <p>{item.farmerName}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Farm Location</h3>
                  <p>{item.farmLocation}</p>
                </div>
              </div>
              <Separator />
               <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Harvest Date</h3>
                  <p>{format(new Date(item.harvestDate), 'PPP')}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Current Status</h3>
                   <Badge variant={item.status === 'Sold' ? 'destructive' : item.status === 'At Market' ? 'secondary' : 'default'}>{item.status}</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
                <div className="w-full space-y-2">
                    <Label htmlFor="update-status" className="text-sm font-medium">Update Status</Label>
                    <div className="flex gap-2">
                        <Select defaultValue={item.status}>
                            <SelectTrigger id="update-status">
                                <SelectValue placeholder="Select new status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Harvested">Harvested</SelectItem>
                                <SelectItem value="In Transit">In Transit</SelectItem>
                                <SelectItem value="At Market">At Market</SelectItem>
                                <SelectItem value="Sold">Sold</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button onClick={handleStatusUpdate}>
                            <Save className="mr-2 h-4 w-4" /> Save
                        </Button>
                    </div>
                </div>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Tracking History</CardTitle>
              <CardDescription>Movement and status changes.</CardDescription>
            </CardHeader>
            <CardContent>
              <StatusTimeline history={item.history} currentStatus={item.status} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
