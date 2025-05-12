type EmptyStateProps = {
  message: string;
};

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="text-center text-gray-500 p-6 border border-dashed rounded-lg">
      <p>{message}</p>
    </div>
  );
}
