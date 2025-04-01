import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded-md text-sm font-medium transition";
  const styles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-neutral-300 text-neutral-800 hover:bg-neutral-100",
  };

  return (
    <button className={cn(base, styles[variant], className)} {...props} />
  );
}
