"use client";

import Button from "@/components/Button";
import LoaderPage from "@/components/Loader";
import { ProductsProps } from "@/type/dataType";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductsPage from "@/components/Products";

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
    console.log("Products Data", data);
    setProducts(data);
  };

  useEffect(() => {
    if (!searchParams.get("page")) {
      router.replace(`/products?page=1`);
      return;
    }
    fetchData();
  }, [offset]);

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

  return (
    <>
      <div className="w-full h-screen p-3 md:p-6 xl:p-20 ">
        {/* <h1 className="mb-6 text-center text-3xl font-bold">Products </h1> */}
        <h1 className="text-2xl md:text-3xl pl-2 my-6 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200 ">
          Products
        </h1>
        <div className="flex flex-col">
          <ProductsPage products={products} />
          <div className="flex justify-center items-center !my-12 ">
            <Button
              label="<"
              onClick={handlePrevious}
              disabled={page === 1}
              className="font-bold border border-e-0 border-gray-300 rounded-s-lg"
            />
            <Button
              label="1"
              onClick={() => { router.push(`/products?page=1`); }}
              className={`${page === 1 ? "bg-gray-300" : ""}`}
            />
            <Button
              label="2"
              onClick={() => { router.push(`/products?page=2`); }}
              className={`${page === 2 ? "bg-gray-300 outline-none " : ""}`}
            />
            <Button
              label="3"
              onClick={() => { router.push(`/products?page=3`); }}
              className={`${page === 3 ? "bg-gray-300" : ""}`}
            />
            <Button
              label="4"
              onClick={() => { router.push(`/products?page=4`); }}
              className={`${page === 4 ? "bg-gray-300" : ""}`}
            />
            <Button
              label="5"
              onClick={() => { router.push(`/products?page=5`); }}
              className={`${page === 5 ? "bg-gray-300" : ""}`}
            />
            <Button
              label="6"
              onClick={() => { router.push(`/products?page=6`); }}
              className={`${page === 6 ? "bg-gray-300" : ""}`}
            />
            <Button
              label="7"
              onClick={() => { router.push(`/products?page=7`); }}
              className={`${page === 7 ? "bg-gray-300" : ""}`}
            />
            <Button
              label="8"
              onClick={() => { router.push(`/products?page=8`); }}
              className={`${page === 8 ? "bg-gray-300" : ""}`}
            />
            <Button
              label=">"
              onClick={handleNext}
              disabled={page === 8}
              className="border border-l-0 border-gray-300 rounded-e-lg font-bold"
            />
          </div>
        </div>
      </div>
    </>
  );
}
