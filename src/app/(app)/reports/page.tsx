'use client';

import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { produce } from '@/lib/data';
import { ProduceCategory, ProduceStatus } from '@/lib/definitions';
import { Badge } from '@/components/ui/badge';

export default function ReportsPage() {
    const handlePrint = () => {
        window.print();
    }

    const produceByCategory = produce.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
    }, {} as Record<ProduceCategory, number>);

    const produceByStatus = produce.reduce((acc, item) => {
        acc[item.status] = (acc[item.status] || 0) + 1;
        return acc;
    }, {} as Record<ProduceStatus, number>);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between no-print">
        <div>
          <h1 className="text-2xl font-bold tracking-tight font-headline">
            Reports
          </h1>
          <p className="text-muted-foreground">
            Generate and view summary reports of system data.
          </p>
        </div>
        <Button onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print Report
        </Button>
      </div>
      <div className="print-container space-y-8">
        <div className="print-header hidden text-center mb-8">
            <h1 className="text-2xl font-bold">MakolaTrack - System Report</h1>
            <p className="text-sm">{new Date().toLocaleDateString()}</p>
        </div>
        <Card className="print-card">
            <CardHeader>
                <CardTitle>Produce by Category</CardTitle>
                <CardDescription>Total number of produce items registered per category.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Category</TableHead>
                            <TableHead className="text-right">Total Items</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Object.entries(produceByCategory).map(([category, count]) => (
                            <TableRow key={category}>
                                <TableCell className="font-medium">{category}</TableCell>
                                <TableCell className="text-right">{count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card className="print-card">
            <CardHeader>
                <CardTitle>Produce by Status</CardTitle>
                <CardDescription>Current status distribution of all produce items.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Total Items</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Object.entries(produceByStatus).map(([status, count]) => (
                            <TableRow key={status}>
                                <TableCell className="font-medium"><Badge variant={status === 'Sold' ? 'destructive' : status === 'At Market' ? 'secondary' : 'default'}>{status}</Badge></TableCell>
                                <TableCell className="text-right">{count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
