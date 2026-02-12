import { produce } from '@/lib/data';
import { MarketListing } from '@/components/market/market-listing';

export default function MarketPage() {
  const availableProduce = produce.filter(
    (p) => p.status === 'At Market' || p.status === 'Sold'
  );
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline md:text-4xl">
          Makola Market Produce
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Browse fresh produce currently available at the market.
        </p>
      </div>
      <MarketListing produce={availableProduce} />
    </>
  );
}
