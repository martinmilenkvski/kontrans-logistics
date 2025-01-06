import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({ ...props }: TextAreaProps) {
  return (
    <textarea
      className="w-full rounded border p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
}
