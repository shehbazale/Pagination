import React, { Suspense } from "react";
import Products from "./products/page";

const Page = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Products />
      </Suspense>
    </>
  );
};

export default Page;
