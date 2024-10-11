import { create } from 'zustand'
import { Product } from '@/types'
import { createJSONStorage, persist } from 'zustand/middleware'
import { toast } from 'sonner'

interface CartStore {
    items: (Product & { quantity: number })[]
    addItem: (data: Product) => void
    removeItem: (id: string) => void
    removeAll: () => void
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        
        
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);
            
            if (existingItem) {
                set({
                    items: currentItems.map((item) =>
                        item.id === data.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                });
            } else {
                set({ items: [...currentItems, { ...data, quantity: 1 }] });
            }
            
            toast.success("Item adicionado ao carrinho");
        },
        removeItem: (id: string) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === id);
            
            if (existingItem && existingItem.quantity > 1) {
                set({
                    items: currentItems.map((item) =>
                        item.id === id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                });
            } else {
                set({ items: currentItems.filter((item) => item.id !== id) });
                toast.success("Item removido do carrinho");
            }
        },
        removeAll: () => {
            set({ items: [] })
            toast.success("Todos items foram removidos.")
        }
    }), {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage)
    }
    ),
)

export default useCart