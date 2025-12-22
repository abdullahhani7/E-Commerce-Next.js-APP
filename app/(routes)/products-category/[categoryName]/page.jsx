import Api from "@/app/_utils/Api";
import React from "react";
import TopCategoryList from "./_components/TopCategoryList";
import ProductsList from "@/app/_components/ProductsList";

const page = async ({ params }) => {
  const { categoryName } = await params;
  const productsList = await Api.getProductsByCategory(categoryName);
  const categoryList = await Api.getCategoryList();
  console.log("categoryName", categoryName);

  return (
    <div>
      <h2 className="bg-[#ffcc00] text-black font-bold p-4 text-center text-2xl capitalize ">
        {decodeURIComponent(categoryName)}
      </h2>
      <TopCategoryList
        categoryList={categoryList}
        selectedCategory={decodeURIComponent(categoryName)}
      />
      <ProductsList productsList={productsList} />
    </div>
  );
};

export default page;
