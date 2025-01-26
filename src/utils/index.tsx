import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToHash = (href: string, smooth = true) => {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
  }
};
