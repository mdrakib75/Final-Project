import React, { useContext } from "react";
import { FaCodeCompare, FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { ApiData } from "./ContextApi";
import { Link, Links } from "react-router-dom";

const Page = ({ allData }) => {
  let { loading } = useContext(ApiData);
  if (loading) {
    return (
      <>
        <h2>Loading.....</h2>
      </>
    );
  }
  return (
    <>
      <div className="pt-13 gap-y-15 flex flex-wrap justify-between">
        {allData.map((item) => (
          <div key={item.id} className="md:w-[31%] w-[48%]">
            <div className="relative group">
              <div className="bg-[#D8D8D8]">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="absolute right-0 bottom-0 w-full bg-[#FFFFFF] overflow-hidden opacity-0 group-hover:opacity-100 duration-300 ease-in-out h-0 group-hover:h-[130px]">
                <ul>
                  <li className="flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]">
                    <span>Add to Wish List</span>
                    <FaHeart />
                  </li>
                  <li className="flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]">
                    <span>Compare</span>
                    <FaCodeCompare />
                  </li>
                  <li className="flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]">
                    <span>Add to Cart</span>
                    <FaShoppingCart />
                  </li>
                </ul>
              </div>
              <div className="absolute top-5 left-5">
                <a
                  className="bg-[#262626] md:px-8 px-4 md:py-2 py-[4px] text-white font-bold font-dms text-[14px]"
                  href="#"
                >
                  New
                </a>
              </div>
            </div>
            <div className="flex justify-between pt-2">
              <div className="">
                <h3 className="md:font-bold font-medium font-dms md:text-[18px] text-[16px]">
                  {item.title}
                </h3>
                <p className="font-dms font-normal md:text-[16px] text-[12px] text-[#767676]">
                  {item.brand}
                </p>
              </div>
              <div className="font-dms font-normal md:text-[16px] text-[12px] text-[#767676]">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
