import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import Api from "./_utils/Api";
import CategoryList from "./_components/CategoryList";
import ProductsList from "./_components/ProductsList";
import Footer from "./_components/Footer";

export default async function Home() {
  const sliderList = await Api.getSlider();
  // console.log(sliderList);
  const categoryList = await Api.getCategoryList();
  // console.log("categoryList", categoryList);

  const productsList = await Api.getProductsList();
  console.log("productsList", productsList);

  return (
    <div className="p-10 px-16">
      <Slider sliderList={sliderList} />
      <CategoryList categoryList={categoryList} />
      <ProductsList productsList={productsList} />
      <Image
        src="/footerImg.png"
        width={1000}
        height={300}
        alt="icon"
        layout="responsive"
        className="mt-8"
      />
      <Footer />
    </div>
  );
}
