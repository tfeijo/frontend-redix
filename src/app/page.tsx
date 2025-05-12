import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Contatos integrados</h1>
      <p className="mt-2 mb-4">Bem-vindo ao sistema de visualização integrada de contatos e contratos.</p>

      <nav>
        <Link href="/contatos/completo" className="text-blue-600 underline">
          Acessar Contatos Integrados
        </Link>
      </nav>
    </main>
  );
}
