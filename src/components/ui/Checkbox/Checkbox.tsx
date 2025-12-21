import type { InputHTMLAttributes } from "react";

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({
  label,
  className = "",
  ...props
}: Props) {
  return (
    <label className="flex items-center gap-3 text-sm text-gray-800 dark:text-gray-200 cursor-pointer">
      <input
        type="checkbox"
        {...props}
        className={`
          w-4 h-4
          rounded
          border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-800
          accent-[#FF623E]
          cursor-pointer
          ${className}
        `}
      />
      {label}
    </label>
  );
}
