import axios from 'axios';

type CreateAPIOptions = {
  baseURL: string;
  token?: string;
};

export function createAPI({ baseURL, token }: CreateAPIOptions) {
  return axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${token}` },
  });
}

export const apiContatos = createAPI({
  baseURL: process.env.NEXT_PUBLIC_API_CONTATOS!,
  token: process.env.NEXT_PUBLIC_TOKEN_CONTATOS,
});

export const apiContratos = createAPI({
  baseURL: process.env.NEXT_PUBLIC_API_CONTRATOS!,
  token: process.env.NEXT_PUBLIC_TOKEN_CONTRATOS,
});