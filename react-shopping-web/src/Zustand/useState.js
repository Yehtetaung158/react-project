import { create } from "zustand";

const useCart = create((set) => ({
    cart: [],
    addToCart: (item) => {
        set((state) => ({
            cart: [...state.cart, item],
        }));
    },
}));
export default useCart