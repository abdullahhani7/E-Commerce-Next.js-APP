import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopCategoryList = ({ categoryList, selectedCategory }) => {
  return (
    <div className="gap-10 md:gap-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6  justify-items-center items-center mt-5">
      {categoryList.map((cat, index) => (
        <Link
          href={`/products-category/${cat.name}`}
          key={index}
          className={`w-30 h-35 mt-3    p-3 flex flex-col items-center text-center group ${
            selectedCategory === cat.name && "bg-[#ffcc00] text-white"
          } `}
        >
          <Image
            src={cat?.icon?.[0].url}
            width={70}
            height={70}
            alt=""
            className="rounded-full  hover:scale-125 transition-all cursor-pointer"
          />
          <small className="text-amber-500 font-bold capitalize">
            {cat?.name}
          </small>
        </Link>
      ))}
    </div>
  );
};

export default TopCategoryList;
