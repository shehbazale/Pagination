'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Spinner from '../assests/__Iphone-spinner-1.gif'

export default function Home() {
  const [products, setProducts] = useState<any[]>([])
  const [offset, setOffset] = useState<number>(0)
  const fetchData = async () => {
    let response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=12`)
    let data = await response.json();
    // console.log('Products Data', data.length)
    console.log('Products Data', data)
    if (data.length) {
       setProducts(data)
      }
  }
  useEffect(() => {
    fetchData()
  }, [offset])

  const handleNext = () => {
    setOffset((pre) => pre + 12)
  }
  const handlePrevious = () => {
    setOffset((pre) => pre - 12)
  }
  if(!products.length){
    return (
      <>
      <div className="flex justify-center items-center h-screen">
          <div className="animate-spin ease-linear rounded-full w-20 h-20 border-t-2 border-b-2 border-gray-500 ml-3"></div>
        </div>
      
      </>
    )
  }

  return (
    <>
      <div className="w-full h-screen  p-12">
        <div className="flex flex-col">
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 " >
            {products.map((product) => (
              <>
                <article className="max-w-sm w-full  rounded-lg shadow-lg overflow-hidden  transition-all ease-in-out duration-500 hover:scale-105" key={product.id}>
                  <Image
                    src={product.category.image}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="object-cover h-40 w-full"
                  />
                  <div className="flex flex-col gap-1 my-4 px-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">{product.title}</h2>
                    <span className="font-semibold text-gray-800 dark:text-gray-50">${product.price}</span>
                  </div>
                </article>
              </>
            ))}
          </div>
          <div className="flex justify-center items-center !my-12 space-x-4">
            <button type="button" className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-28
              ${offset === 0 ? "cursor-not-allowed" : "cursor-pointer"}
              `} onClick={handlePrevious} disabled={offset === 0}>
              Previous
            </button>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-28 "
            disabled={!products.length}
            onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
