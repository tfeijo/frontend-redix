import { useEffect, useState } from 'react';

type Contato = {
  nome: string;
  email: string;
  cnpj: string;
};

type Contrato = {
  cnpj: string;
  additionalData?: string;
};

type ContatoCompleto = Contato & {
  dados_adicionais: string;
};

export function useContatosCompletos() {
  const [dados, setDados] = useState<ContatoCompleto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [contatosRes, contratosRes] = await Promise.all([
          fetch('/api/contatos/lista'),
          fetch('/api/contratos/lista'),
        ]);

        checkCallsStatus(contatosRes, contratosRes);
        
        const contatosData: { data: Contato[] } = await contatosRes.json();
        const contratosData: { data: Contrato[] } = await contratosRes.json();
        
        const integrados = contatosData.data.map((contato) => {
          const contrato = contratosData.data.find((c) => c.cnpj === contato.cnpj);
          return {
            ...contato,
            dados_adicionais: contrato?.additionalData || 'Não informado',
          };
        });

        setDados(integrados);
      } catch (err) {
        console.error(err);
        setError('Erro ao buscar dados.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { dados, loading, error };
}

function checkCallsStatus(contatosRes: Response, contratosRes: Response) {
    checkResponse(contatosRes, 'Erro ao buscar contatos');
    checkResponse(contratosRes, 'Erro ao buscar contratos');
}

function checkResponse(response: Response, label: string) {
    if (!response.ok) {
        throw new Error(`${label} - ${response.status} ${response.statusText}`);
    }
}
