import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Image src={product?.image?.[0].url} width={300} height={300} alt="img" />

      <div className="flex flex-col gap-3 p-3">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <h2 className="text-sm text-gray-500">{product.description}</h2>

        <div className="flex gap-3">
          <h2 className="text-2xl font-bold">{product.sellingPrice} $</h2>
          <del className="text-2xl text-red-600">{product.realPrice} $</del>
        </div>

        <div className="flex flex-col items-baseline">
          <div className="flex gap-10 border p-3 items-center">
            <button>-</button>
            <h2>1</h2>
            <button>+</button>
          </div>
          <Button className="text-black bg-amber-500 hover:bg-amber-600 flex gap-3 mt-5">
            <ShoppingBasket /> Add To Cart
          </Button>
        </div>
        <h2>
          <span className="font-bold text-[#ffcc00]">Category:</span>{" "}
          {product.categories[0].name}
        </h2>
      </div>
    </div>
  );
};

export default ProductDetail;
