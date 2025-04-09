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
        className="inline-block bg-[#1e60f5] hover:bg-[#4183ff] text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg"
        >
        {children}
      </button>
    );
  }