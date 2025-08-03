import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemInCart } from "../redux/cart/cartSlice";
import type { DispatchType, RootState } from "../redux/store";

export type ProductCardProps = {
  id: number;
  thumbnail: string;
  brand: string;
  category: string;
  description: string;
  images: string;
  price: number;
  title: string;
  weight: number;
  quantity: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  thumbnail,
}) => {
  const dispatch = useDispatch<DispatchType>();
  const theme = useSelector((state: RootState) => state.mode);
  return (
    <div className="card rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-4 w-full max-w-xs">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover rounded-xl"
      />
      <h2 className="text-lg font-bold mt-3 line-clamp-2">{title}</h2>
      <p className="text-gray-400 mt-1 text-sm">
        Price:{" "}
        <span
          className={`font-medium ${theme !== "midnight" ? "text-black" : "text-gray-400"}`}
        >
          ${price}
        </span>
      </p>

      <button
        className="mt-4 w-full text-white text-sm font-semibold py-2 rounded-lg transition-colors duration-300"
        onClick={() => {
          dispatch(addItemInCart({ id }));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
