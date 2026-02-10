import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Produce } from '@/lib/definitions';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface ProduceCardProps {
  produce: Produce;
}

export function ProduceCard({ produce }: ProduceCardProps) {
  const placeholderImage = PlaceHolderImages[0];
  
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
            <Image
                src={placeholderImage.imageUrl}
                alt={produce.name}
                fill
                className="object-cover"
                data-ai-hint={placeholderImage.imageHint}
            />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="mb-1 text-lg">{produce.name}</CardTitle>
        <CardDescription>from {produce.farmLocation}</CardDescription>
        <div className="mt-2 text-sm text-muted-foreground">
            <p>Category: <span className="font-medium text-foreground">{produce.category}</span></p>
            <p>Farmer: <span className="font-medium text-foreground">{produce.farmerName}</span></p>
        </div>
      </CardContent>
      <CardFooter>
        <Badge variant="secondary">Available</Badge>
        <p className="ml-auto text-sm font-semibold">{produce.quantity} {produce.category === 'Grains' || produce.category === 'Tubers' ? 'kg' : 'boxes'}</p>
      </CardFooter>
    </Card>
  );
}
