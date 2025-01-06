import React from "react";

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}


export function Label({ children, htmlFor }: LabelProps) {
  return (
    <label className="block mb-2 font-medium text-gray-700" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
