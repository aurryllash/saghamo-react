import { create } from "zustand";
import { ProductFromBack } from './Interfaces/interface';

type ProductStore = {
    products: ProductFromBack[] | null,
    setProducts: (value: ProductFromBack[]) => void
}

export const useProductStore = create<ProductStore>((set) => ({
    products: null,
    setProducts: (value: ProductFromBack[]) => {
        set({ products: value })
    }
    })) 