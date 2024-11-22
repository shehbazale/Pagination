import { ProductsProp, ProductsProps } from "@/type/dataType";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const ProductsPage: React.FC<ProductsProp> = ({ products }) => {
  console.log("products", products[0].images[0])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products?.map((product) => (
        <article
          className="max-w-sm w-full rounded-lg p-2 overflow-hidden transition-all ease-in-out duration-500 hover:scale-105 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          key={product.id}
        >
          <Image
            // src={product.images[1] || JSON.parse(product.images[0])[0]}
            src="https://i.imgur.com/FDwQgLy.jpeg"
            width={200}
            height={200}
            alt={product.title}
            className="object-cover h-auto w-full rounded-md"
          />
          <div className="flex flex-col justify-between  my-4 px-4 h-44 ">
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-50">
              {product.title}
            </h2>
            <p className="truncate">{product.description}</p>
            <div className="flex justify-between">
              <p className="tex-sm font-normal text-gray-800 dark:text-gray-50">
                {product.category.name}
              </p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-50">
                ${product.price}
              </p>
            </div>
            <Button
              label="Add to cart"
              className="flex items-center justify-center rounded-md bg-[#9CA3AF] px-5 py-2.5 text-center text-sm text-white hover:shadow-lg font-bold focus:outline-none  w-full"
            />
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductsPage;
