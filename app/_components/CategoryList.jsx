import Image from "next/image";
import React from "react";

const CategoryList = ({ categoryList }) => {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-2xl text-amber-500">Shop By Catgory</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6  justify-items-center items-center mt-5">
        {categoryList.map((cat, index) => (
          <div key={index} className="flex flex-col items-center text-center  ">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${cat?.icon?.[0].url}`}
              width={50}
              height={50}
              alt=""
              className="rounded-full  hover:scale-125 transition-all "
            />
            <p className="text-amber-500 font-bold capitalize">{cat?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
