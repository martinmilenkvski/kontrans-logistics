import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      className="w-full rounded border p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
}
