export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      <span className="ml-3 text-black font-small">Carregando...</span>
    </div>
  );
}