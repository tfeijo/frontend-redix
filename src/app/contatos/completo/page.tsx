'use client';

import { useEffect, useState } from 'react';
import { apiContatos, apiContratos } from '@/services/api';
import CardContato from '@/components/CardContato';

export default function ContatosCompletos() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [contatosRes, contratosRes] = await Promise.all([
          apiContatos.get('/contatos'),
          apiContratos.get('/contratos/lista'),
        ]);

        const contatos = contatosRes.data.data;
        const contratos = contratosRes.data.data;

        const integrados = contatos.map((contato: any) => {
          const contrato = contratos.find((c: any) => c.cnpj === contato.cnpj);
          return {
            nome: contato.nome,
            email: contato.email,
            cnpj: contato.cnpj,
            dados_adicionais: contrato?.additionalData || 'Não informado',
          };
        });

        setDados(integrados);
      } catch (err) {
        setError('Erro ao buscar dados.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

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
