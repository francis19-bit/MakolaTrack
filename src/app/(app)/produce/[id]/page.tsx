import { produce } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProduceDetailsClient from '@/components/produce/produce-details-client';

export async function generateStaticParams() {
  return produce.map((item) => ({
    id: item.id,
  }));
}

export default function ProduceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const item = produce.find((p) => p.id === params.id);

  if (!item) {
    notFound();
  }

  return <ProduceDetailsClient item={item} />;
}
