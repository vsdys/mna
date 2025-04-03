export default function Button({
    children,
    onClick,
    disabled
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
  }) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {children}
      </button>
    );
  }