'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Produce } from '@/lib/definitions';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

export const columns: ColumnDef<Produce>[] = [
  {
    accessorKey: 'name',
    header: 'Produce',
    cell: ({ row }) => {
        const produce = row.original;
        return (
            <div>
                <div className="font-medium">{produce.name}</div>
                <div className="text-sm text-muted-foreground">{produce.category}</div>
            </div>
        )
    }
  },
  {
    accessorKey: 'farmerName',
    header: 'Farmer',
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
    cell: ({ row }) => {
        const produce = row.original;
        const unit = produce.category === 'Grains' || produce.category === 'Tubers' ? 'kg' : 'boxes';
        return <div>{`${produce.quantity} ${unit}`}</div>
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
        const status = row.getValue('status') as string;
        let variant: "default" | "secondary" | "destructive" | "outline" | null | undefined = 'default';
        if (status === 'Sold') variant = 'destructive';
        if (status === 'At Market') variant = 'secondary';
        
        return <Badge variant={variant}>{status}</Badge>
    }
  },
  {
    accessorKey: 'harvestDate',
    header: 'Harvest Date',
    cell: ({ row }) => {
        const date = new Date(row.getValue('harvestDate'));
        return <div>{date.toLocaleDateString()}</div>
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const produce = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
                <Link href={`/produce/${produce.id}`}>View Details & Track</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Edit Produce</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
