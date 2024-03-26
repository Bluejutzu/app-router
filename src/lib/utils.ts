/** @format */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { cn, delay };
