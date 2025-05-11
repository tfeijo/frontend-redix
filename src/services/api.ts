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
  baseURL: process.env.API_CONTATOS!,
  token: process.env.TOKEN_CONTATOS,
});

export const apiContratos = createAPI({
  baseURL: process.env.API_CONTRATOS!,
  token: process.env.TOKEN_CONTRATOS,
});