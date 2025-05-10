import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Sistema C',
  description: 'Visualização integrada de contatos e contratos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="max-w-4xl mx-auto pt-20 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
