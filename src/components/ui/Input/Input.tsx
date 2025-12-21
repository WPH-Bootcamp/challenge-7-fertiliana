import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`
        w-full h-11 px-4 rounded-lg
        bg-white dark:bg-gray-900 text-black dark:text-white text-sm
        border border-gray-300 dark:border-gray-700
        placeholder:text-gray-400 dark:placeholder:text-gray-500
        focus:outline-none focus:border-[#FF623E]
        transition-colors
        ${className}
      `}
    />
  );
}
