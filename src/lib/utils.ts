import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function extractHubFromURL(url: string): string {
  const regex = /hub\/([^/]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
}