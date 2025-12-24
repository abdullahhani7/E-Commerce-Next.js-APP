"use client";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ProductDetail = ({ product }) => {
  const [productTotalPrice, setProductTotalPrice] = useState(
    product.sellingPrice ? product.sellingPrice : product.realPrice
  );

  const [quantity, setQuantity] = useState(1);

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
          <div className="flex gap-3 items-center">
            <div className="flex gap-10 border p-3 items-center">
              <button
                disabled={quantity == 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
              <h2>{quantity}</h2>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <h2 className="  font-bold ">
              {(productTotalPrice * quantity).toFixed(2)} $
            </h2>
          </div>
          <Button className="text-black flex gap-3 mt-5">
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
