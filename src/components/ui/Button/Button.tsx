import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "cta";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center h-12 px-6 rounded-full font-semibold text-base transition focus:outline-none focus:ring-2";

  const variantStyle = {
    primary:
      "bg-[#FF623E] text-white hover:bg-[#ff7554] focus:ring-[#FF623E]/40 shadow-[inset_4px_4px_4px_0px_rgba(255,255,255,0.25)] min-w-[140px]",

    cta:
      "bg-gradient-to-r from-[#FF623E] to-[#FF7A4A] text-white hover:opacity-90 focus:ring-[#FF623E]/50 shadow-lg shadow-[#FF623E]/30",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      {...props}
      className={`${baseStyle} ${variantStyle[variant]} ${widthStyle} ${className}`}
    >
      {children}
    </button>
  );
}
