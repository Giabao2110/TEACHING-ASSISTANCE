import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatScore(score: number): string {
  return score.toFixed(1);
}

export function getStatusColor(status: string) {
  switch (status) {
    case 'On Track':
    case 'Checked':
    case 'Submitted':
      return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    case 'Delayed':
    case 'Pending':
      return 'bg-amber-100 text-amber-700 border-amber-200';
    case 'Accelerating':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    default:
      return 'bg-slate-100 text-slate-700 border-slate-200';
  }
}
