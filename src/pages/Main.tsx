import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import ProductCard from "../components/ProductCard";

const Main = () => {
  const { data, status, error } = useSelector(
    (state: RootState) => state.products,
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto px-4">
      {status === "succeeded" ? (
        Array.isArray(data?.products) &&
        data.products.map(
          ({
            id,
            brand,
            category,
            thumbnail,
            description,
            images,
            price,
            title,
            weight,
            quantity,
          }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              thumbnail={thumbnail}
              brand={brand}
              category={category}
              description={description}
              images={images[0]}
              weight={weight}
              quantity={quantity}
            />
          ),
        )
      ) : error !== null ? (
        <div className="col-span-full text-center text-lg font-medium text-gray-600">
          Got an error while fetching Please reload...
        </div>
      ) : (
        <div className="col-span-full text-center text-lg font-medium text-gray-600">
          Loading...
        </div>
      )}
    </div>
  );
};

export default Main;
