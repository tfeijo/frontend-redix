import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="font-bold text-xl text-gray-800">Sistema C</h1>
        <nav className="space-x-4 text-sm text-blue-600">
          <Link href="/" className="hover:underline">Início</Link>
          <Link href="/contatos/completo" className="hover:underline">Contatos Integrados</Link>
        </nav>
      </div>
    </header>
  );
}
