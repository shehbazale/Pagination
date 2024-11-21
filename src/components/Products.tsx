import { ProductsProps } from "@/type/dataType";
import Image from "next/image";
import React from "react";

interface ProductsProp {
  products: ProductsProps[];
}
const ProductsPage: React.FC<ProductsProp> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products?.map((product) => (
        <article
          className="max-w-sm w-full rounded-lg shadow-lg overflow-hidden transition-all ease-in-out duration-500 hover:scale-105"
          key={product.id}
        >
          <Image
            // src={product.images[1]}
            src="https://i.imgur.com/FDwQgLy.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="object-cover h-auto w-full"
          />
          <div className="flex flex-col gap-1 my-4 px-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
              {product.title}
            </h2>
            <span className="font-semibold text-gray-800 dark:text-gray-50">
              ${product.price}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductsPage;
