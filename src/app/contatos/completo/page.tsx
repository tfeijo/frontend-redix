'use client';

import CardContato from '@/components/CardContato';
import EmptyState from '@/components/EmptyState';
import LoadingSpinner from '@/components/LoadingSpinner';

import { useContatosCompletos } from '@/hooks/useContatosCompletos';

export default function ContatosCompletos() {
  const { dados, loading, error } = useContatosCompletos();
  
  return (
    <section className="space-y-4">
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500">{error}</p>}
      
      {!loading && !error && dados.length === 0 && (
        <EmptyState message="Nenhum contato encontrado." />
      )}

      {dados.map((item, index) => (
        <CardContato key={index} {...item} />
      ))}
    </section>
  );
}
