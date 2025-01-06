interface ButtonProps {
  className?: string;

  variant?: "outline" | "solid" | "ghost";

  type?: "button" | "submit" | "reset";

  children?: React.ReactNode;

  onClick?: () => void;

  asChild?: boolean;

  disabled?: boolean;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
