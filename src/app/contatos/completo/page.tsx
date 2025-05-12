'use client';

import CardContato from '@/components/CardContato';
import { useContatosCompletos } from '@/hooks/useContatosCompletos';

export default function ContatosCompletos() {
  const { dados, loading, error } = useContatosCompletos();
  
  return (
    <section className="space-y-4">
      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {dados.map((item, index) => (
        <CardContato key={index} {...item} />
      ))}
    </section>
  );
}
