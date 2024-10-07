import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatPrice(price: string | number, currency: string = "AOA") {
    return new Intl.NumberFormat("pt-AO", {
      style: "currency",
      currency: currency,
    }).format(Number(price));
  }
  