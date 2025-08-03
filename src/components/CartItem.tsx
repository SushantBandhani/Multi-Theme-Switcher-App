import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeItemInCart,
} from "../redux/cart/cartSlice";
import type { DispatchType, RootState } from "../redux/store";
import { createSelector } from "@reduxjs/toolkit";

export interface CartItemsPropsType {
  id: number;
  brand: string;
  category: string;
  description: string;
  imageSrc: string;
  price: number;
  title: string;
  weight: number;
  quantity: number;
  thumbnail: string;
}

export const makeSelectItemById = (id: number | string) =>
  createSelector(
    (state: RootState) => state.cart.data,
    (data) => data.find((ele) => ele.id === id),
  );

// This component renders the individual cart items
const CartItem: React.FC<CartItemsPropsType> = ({
  id,
  brand,
  category,
  description,
  imageSrc,
  price,
  title,
  weight,
}) => {
  const dispatch = useDispatch<DispatchType>();
  const itemSelector = React.useMemo(() => makeSelectItemById(id), [id]);
  const item = useSelector(itemSelector);
  return (
    <div
      className="card flex flex-col md:flex-row gap-4 p-2 m-2 rounded-lg shadow-sm"
      style={{
        backgroundColor: "var(--primary-bg)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-family)",
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full md:w-40 h-40 object-cover rounded-md"
      />

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h2>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            {brand}
          </p>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            {category}
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--text-primary)" }}>
            {description}
          </p>
          <p
            className="text-sm mt-1"
            style={{ color: "var(--text-secondary)" }}
          >
            Weight: {weight}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => dispatch(decreaseCartItemQuantity({ id }))}
              style={{
                backgroundColor: "var(--secondary-bg)",
                color: "var(--text-primary)",
              }}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80"
            >
              −
            </button>
            <span className="text-md font-medium">{item?.quantity}</span>
            <button
              onClick={() => dispatch(increaseCartItemQuantity({ id }))}
              style={{
                backgroundColor: "var(--secondary-bg)",
                color: "var(--text-primary)",
              }}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80"
            >
              +
            </button>
          </div>

          <p
            className="text-lg font-bold"
            style={{ color: "var(--accent-color)" }}
          >
            $
            {(Math.round(price * (item?.quantity ?? 0) * 100) / 100).toFixed(2)}
          </p>

          <button
            onClick={() => dispatch(removeItemInCart({ id }))}
            className="text-sm ml-4"
            style={{ color: "white" }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
