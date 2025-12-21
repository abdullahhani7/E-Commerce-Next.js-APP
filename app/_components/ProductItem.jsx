import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg cursor-pointer hover:scale-105 hover:shadow-md transition-all">
      <Image
        src={product?.image?.[0].url}
        width={300}
        height={500}
        alt=""
        className="h-70 w-70 object-cover"
      />
    </div>
  );
};

export default ProductItem;
