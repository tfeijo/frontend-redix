type Props = {
  nome: string;
  email: string;
  cnpj: string;
  dados_adicionais: string;
};

export default function CardContato({ nome, email, cnpj, dados_adicionais }: Props) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>CNPJ:</strong> {cnpj}</p>
      <p><strong>Dados adicionais:</strong> {dados_adicionais}</p>
    </div>
  );
}
