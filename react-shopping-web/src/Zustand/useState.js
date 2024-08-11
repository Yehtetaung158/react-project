import { create } from "zustand";

const useCart = create((set) => ({
    cart: [],
    addToCart: (item) => {
        set((state) => ({
            cart: [...state.cart, item],
        }));
    },
    removeFromCart: (item) => {
        set((state)=>({
            cart: [{state:item}],
        }));
    },
}));
export default useCart