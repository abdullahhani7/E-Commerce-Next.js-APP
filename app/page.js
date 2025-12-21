import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import Api from "./_utils/Api";

export default async function Home() {
  const sliderList = await Api.getSlider();
  console.log(sliderList);
  

  return (
    <div className="p-10 px-16">
      <Slider sliderList={sliderList} />
    </div>
  );
}
