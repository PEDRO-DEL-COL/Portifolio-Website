import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Une classNames e resolve conflitos do Tailwind
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
