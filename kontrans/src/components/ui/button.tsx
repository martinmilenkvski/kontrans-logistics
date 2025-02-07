import React from "react";

interface ButtonProps {
  className?: string;
  variant?: "outline" | "solid" | "ghost";
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  onClick?: () => void;
  asChild?: boolean;
  disabled?: boolean;
}

export function Button({
  onClick,
  children,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`rounded bg-red-500 px-4 py-2 text-white transition duration-300 ease-in-out transform hover:bg-red-800 hover:scale-105 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}
