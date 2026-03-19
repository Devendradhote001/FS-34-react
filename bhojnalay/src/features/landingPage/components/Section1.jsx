import React from "react";
import Navbar from "./subComp/Navbar";
import { ChevronDown, MapPin, Search } from "lucide-react";
import { useLandingPage } from "../hooks/useLandingPage";

const Section1 = () => {
  let { navigate } = useLandingPage();

  return (
    <div className="h-full bg-[#ff5201] relative ">
      <div className="h-[60%] left-0 top-[15%] absolute">
        <img
          className="h-full"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />
      </div>
      <div className="h-[60%] right-0 top-[15%] absolute">
        <img
          className="h-full"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />
      </div>
      <div className="text-white h-full flex flex-col items-center">
        <Navbar />
        <div className="mt-20 flex flex-col gap-10">
          <h1 className="text-5xl font-semibold text-center">
            Order food & groceries. Discover <br /> best restaurants. Swiggy it!
          </h1>
          <div className="flex gap-6">
            <div className="bg-white w-fit flex gap-4 p-4 rounded-xl">
              <MapPin color="orange" size={28} />
              <input
                className="outline-0 text-black"
                type="text"
                placeholder="Enter your delivery location"
              />
              <ChevronDown color="black" size={28} />
            </div>
            <div className="bg-white w-[80%] justify-between items-center text-gray-500 flex gap-4 p-3 rounded-xl text-black">
              <h1>Search for restaurant, item or more</h1>
              <Search color="gray" size={20} />
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-6">
          <img
            onClick={() => navigate(`/restaurants/food`)}
            width={300}
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
            alt=""
          />
          <img
            width={300}
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
            alt=""
          />
          <img
            width={300}
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
