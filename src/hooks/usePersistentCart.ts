import { useDispatch, useSelector } from "react-redux";
import type { DispatchType, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchProducts } from "../redux/products/productsSlice";

// Helps to persist the cart state in localstorage and also helps to fetch products on page mount
const usePersistentCart = () => {
  const cart = useSelector((state: RootState) => state.cart.data);
  const dispatch = useDispatch<DispatchType>();

  useEffect(() => {
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      try {
        localStorage.setItem("cart", JSON.stringify(cart));
      } catch (e) {
        console.error("Could not save cart to localStorage:", e);
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [cart]);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePersistentCart;
