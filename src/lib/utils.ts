/** @format */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const envSchema = z.object({
  VERCEL_AUTH: z.string().optional(),
  WEBHOOK_TOKEN: z.string().optional(),
});

export const env = envSchema.parse(process.env);
export { cn, delay };
