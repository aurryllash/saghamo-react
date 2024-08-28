import { create } from "zustand";
import { ProductFromBack } from './Interfaces/interface';

type ProductStore = {
    products: ProductFromBack[] | null,
    increment: (value: ProductFromBack[]) => void
}

export const useProductStore = create<ProductStore>((set) => ({
    products: null,
    increment: (value: ProductFromBack[]) => {
        set({ products: value })
    }
    })) 