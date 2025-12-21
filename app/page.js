import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import Api from "./_utils/Api";

export default async function Home() {
  const sliderList = await Api.getSlider();

  return (
    <div>
      <Slider sliderList={sliderList} />
    </div>
  );
}
