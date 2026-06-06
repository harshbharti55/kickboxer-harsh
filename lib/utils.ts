import { type ClassValue } from 'clsx';
import { clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const formatNumber = (n: number) => n.toLocaleString();
