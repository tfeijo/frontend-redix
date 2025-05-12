import type { NextApiRequest, NextApiResponse } from 'next';
import { apiContratos } from '@/services/api';
import { fetchAllPaginatedData } from '@/utils/fetchAllPaginatedData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const contratos = await fetchAllPaginatedData(apiContratos, '/contratos/lista');
    res.status(200).json({ data: contratos });
  } catch (error: any) {
    res.status(500).json({ error: 'Erro ao buscar contratos' });
  }
}