"use client";

import Button from "@/components/Button";
import LoaderPage from "@/components/Loader";
import { ProductsProps } from "@/type/dataType";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductsPage from "@/components/Products";
import { paginatioButtonProps } from "../constant/data";
import ScrollToTop from "@/components/ScrollToTop";

export default function Products() {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const offset = (page - 1) * 12;
  const fetchData = async () => {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=12`
    );
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    if (!searchParams.get("page")) {
      router.replace(`/products?page=1`);
      return;
    }
    fetchData();
  }, [page]);

  const handleNext = () => {
    router.push(`/products?page=${page + 1}`);
  };
  const handlePrevious = () => {
    if (page > 1) {
      router.push(`/products?page=${page - 1}`);
    }
  };
  if (!products.length) {
    return <LoaderPage />;
  }

  const buttonPageProp = { page, router, handlePrevious, handleNext }
  const paginationButtons = paginatioButtonProps(buttonPageProp);

  return (
    <>
      <ScrollToTop />
      <div className="w-full h-screen p-3 md:p-6 xl:p-20 ">
        <h1 className="text-2xl md:text-3xl pl-2 my-6 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200 ">
          Products
        </h1>
        <div className="flex flex-col">
          <ProductsPage products={products} />
          <div className="flex justify-center items-center !my-12 ">
            {paginationButtons?.map((item, index) => {
              return (
                <Button
                  key={index}
                  label={item.label}
                  onClick={item.onClick}
                  disabled={item.disable}
                  className={item.className}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}
