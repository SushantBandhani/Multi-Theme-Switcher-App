import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import toast from "react-hot-toast";
import { createSelector } from "@reduxjs/toolkit";
export const selectCartData = (state: RootState) => state.cart.data;
export const selectProductData = (state: RootState) =>
  state.products.data?.products ?? [];
const Cart = () => {
  const cartItemValues = createSelector(
    [selectCartData, selectProductData],
    (cartItems, products) => {
      return cartItems
        .map(({ id, quantity }) => {
          const product = products.find((p) => p.id === id);
          return product ? { ...product, quantity } : null;
        })
        .filter((item) => item !== null);
    },
  );
  const items = useSelector(cartItemValues);
  return (
    <div>
      {items.length === 0 ? (
        <div className="col-span-full text-center text-lg font-medium text-gray-500">
          Your cart is empty or some products are missing.
        </div>
      ) : (
        <>
          {items.map(
            ({
              id,
              title,
              price,
              images,
              quantity,
              brand,
              category,
              description,
              weight,
              thumbnail,
            }) => (
              <div key={id}>
                <CartItem
                  quantity={quantity}
                  id={id}
                  thumbnail={thumbnail}
                  brand={brand}
                  category={category}
                  description={description}
                  imageSrc={images[0]}
                  price={price}
                  title={title}
                  weight={weight}
                />
              </div>
            ),
          )}
          <div className="mt-6 p-4 border-t border-gray-300 dark:border-gray-700 flex justify-between ">
            <p
              className="text-lg font-semibold"
              style={{
                color: "var(--text-primary)",
              }}
            >
              👨🏻‍💻Subtotal: $
              {items
                .reduce(
                  (acc, item) => acc + item.price * (item.quantity ?? 0),
                  0,
                )
                .toFixed(2)}
            </p>
            <button
              onClick={() => {
                toast.success(
                  "Your items will be delivered to you in few days",
                );
              }}
            >
              Buy
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
