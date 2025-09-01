import React, { useContext, useEffect, useState } from "react";
import { FaCodeCompare, FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { ApiData } from "./ContextApi";
import { Link } from "react-router-dom";

const Page = ({ allData, cateFilter, active }) => {
  let { loading } = useContext(ApiData);
  let [cateMain, setCateMain] = useState([]);
  let [showAll, setShowAll] = useState(true);
  let [showLess, setShowLess] = useState(false);


  useEffect(() => {
    let cateAll = cateFilter.slice(0, 5);
    setCateMain(cateAll);
  }, [cateFilter]);

  let handleShow = () => {
    setCateMain(cateFilter);
    setShowAll(false);
  };

  let handleLess = () => {
    setCateMain(cateFilter.slice(0, 5));
    setShowAll(true);
  };

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
        {cateFilter.length > 0 ? (
          <div className="">
            <div className="flex flex-wrap justify-between ">
              {cateMain.map((item) => (
                <div key={item.id} className="md:w-[31%] w-[48%]">
                  <div className="relative group">
                    <Link to={`/product/${item.id}`}>
                      <div className="bg-[#D8D8D8]">
                        <img src={item.thumbnail} alt="" />
                      </div>
                    </Link>

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
            {showAll ? (
              cateFilter.length > 5 && (
                <div className="" onClick={handleShow}>
                  <h2 className="pt-15">Show All...</h2>
                </div>
              )
            ) : (
              <div className="" onClick={handleLess}>
                <h2 className="pt-15">Show Less...</h2>{" "}
              </div>
            )}
          </div>
        ) : (
          <div className={` ${active == "active" ? 'w-full' : 'flex justify-between flex-wrap'}`}>
               { allData.map((item) => (
            <div key={item.id} className="md:w-[31%] w-[48%]">
              <div className="relative group">
                <Link to={`/product/${item.id}`}>
                  <div className="bg-[#D8D8D8]">
                    <img src={item.thumbnail} alt="" />
                  </div>
                </Link>
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
      
        )}
      </div>
    </>
  );
};

export default Page;
