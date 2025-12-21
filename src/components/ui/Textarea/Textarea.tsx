import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  className = "",
  ...props
}: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`
        w-full min-h-[120px] p-4 rounded-lg
        bg-white dark:bg-gray-900 text-black dark:text-white text-sm
        border border-gray-300 dark:border-gray-700
        placeholder:text-gray-400 dark:placeholder:text-gray-500
        focus:outline-none focus:border-[#FF623E]
        resize-none
        transition-colors
        ${className}
      `}
    />
  );
}
