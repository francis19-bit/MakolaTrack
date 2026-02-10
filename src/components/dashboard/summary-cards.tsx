import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Carrot, Truck, Warehouse } from 'lucide-react';
import { produce } from '@/lib/data';

export function SummaryCards() {
  const totalProduce = produce.length;
  const inTransit = produce.filter(p => p.status === 'In Transit').length;
  const atMarket = produce.filter(p => p.status === 'At Market').length;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Produce Records
          </CardTitle>
          <Carrot className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalProduce}</div>
          <p className="text-xs text-muted-foreground">
            Total items registered in the system
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Produce In Transit</CardTitle>
          <Truck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{inTransit}</div>
          <p className="text-xs text-muted-foreground">
            Items currently on their way to the market
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Produce at Market</CardTitle>
          <Warehouse className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{atMarket}</div>
          <p className="text-xs text-muted-foreground">
            Items delivered and available at Makola Market
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
