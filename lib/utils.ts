import { Product } from "@/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatPrice(price: number | string) {
  return new Intl.NumberFormat("pt-AO", {
    style: "currency",
    currency: "AOA",
  }).format(Number(price));
}

export function getAttributes(data: Product) {
  return data.productType.attributes.reduce((acc, attr) => {
    acc[attr.key] = attr.label;
    return acc;
  }, {} as Record<string, string>);
}