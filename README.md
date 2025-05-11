# sistema-c

Frontend do Sistema C para integração de contatos e contratos.

Este frontend foi desenvolvido com Next.js para integrar e exibir informações provenientes das APIs de Contatos e Contratos, usando autenticação com JWT.

## 🚀 Tecnologias Utilizadas

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript
- Axios

## 📦 Scripts Disponíveis

- `dev`: next dev
- `build`: next build
- `start`: next start
- `lint`: next lint

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` com:

```env
NEXT_PUBLIC_API_CONTATOS=http://localhost:3001
NEXT_PUBLIC_API_CONTRATOS=http://localhost:3002

NEXT_PUBLIC_TOKEN_CONTATOS=seu_token_contatos
NEXT_PUBLIC_TOKEN_CONTRATOS=seu_token_contratos
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── contatos/completo/page.tsx
├── components/
│   ├── Header.tsx
│   └── CardContato.tsx
├── services/
│   └── api.ts
```

## ▶️ Como Executar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📄 Licença

Este projeto está sob a licença MIT.
