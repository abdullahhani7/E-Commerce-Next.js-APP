import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="cursor-pointer p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg  hover:scale-105 hover:shadow-md transition-all">
      <Image
        src={product?.image?.[0].url}
        width={300}
        height={500}
        alt=""
        className="h-70 w-70 object-cover"
      />
      <h2 className="text-amber-500 font-bold">{product.name}</h2>
      <div className="flex gap-2">
        <del className="font-bold text-xl ">{product.realPrice} $</del>
        <h2 className="text-red-600 font-bold text-xl">
          {product.sellingPrice} $
        </h2>
      </div>
      <Button className="text-black bg-amber-500 hover:bg-amber-600">
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductItem;
