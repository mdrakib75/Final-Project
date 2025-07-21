import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import CartImg from "../assets/cart.png";
import { HiMiniBars2 } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import {
  FaSearch,
  FaUser,
  FaChevronDown,
  FaShoppingCart,
} from "react-icons/fa";

const Navbar = () => {
  let [cateShow, setCateShow] = useState();
  let [accShow, setAccShow] = useState();
  let [cartShow, setCartShow] = useState();

  let cateRef = useRef();
  let accRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cateRef.current.contains(e.target)) {
        setCateShow(!cateShow);
      } else {
        setCateShow(false);
      }

      if (accRef.current.contains(e.target)) {
        setAccShow(!accShow);
      } else {
        setAccShow(false);
      }

      if (cartRef.current.contains(e.target)) {
        setCartShow(!cartShow);
      } else {
        setCartShow(false);
      }
    });
  }, [cateShow, accShow, cartShow]);

  return (
    <>
      <nav className="bg-[#F5F5F3] py-2 mt-3 lg:mt-0">
        <Container>
          <div className="lg:flex items-center">
            <div className="lg:w-1/4  relative">
              <div className="flex items-center gap-2" ref={cateRef}>
                <div className="">
                  <HiMiniBars2 />
                </div>
                <h3 className="text-[14px] font-dms font-normal text-[#262626]">
                  Shop by Category
                </h3>
              </div>
              {cateShow && (
                <div className="bg-[#262626] py-3 absolute left-0 top-10 w-full">
                  <ul>
                    <li
                      className="py-2 text-[rgba(255,255,255,0.7)] pl-5 hover:text-[#ffffff] hover:pl-[30px]
                  duration-300 ease-in-out font-dms font-normal text-[14px] border-b-[1px] border-[rgba(255,255,255,0.7)]"
                    >
                      <div className="flex justify-between">
                        <span>Accessories</span>
                        <div className="pr-3">
                          <RiArrowRightSLine />
                        </div>
                      </div>
                    </li>
                    <li
                      className="py-2 text-[rgba(255,255,255,0.7)] pl-5 hover:text-[#ffffff] hover:pl-[30px]
                  duration-300 ease-in-out font-dms font-normal text-[14px] border-b-[1px] border-[rgba(255,255,255,0.7)]"
                    >
                      <div className="flex justify-between items-center">
                        <span>Furniture</span>
                        <div className="pr-3">
                          <RiArrowRightSLine />
                        </div>
                      </div>
                    </li>
                    <li
                      className="py-2 text-[rgba(255,255,255,0.7)] pl-5 hover:text-[#ffffff] hover:pl-[30px]
                  duration-300 ease-in-out font-dms font-normal text-[14px] border-b-[1px] border-[rgba(255,255,255,0.7)]"
                    >
                      Electronics
                    </li>
                    <li
                      className="py-2 text-[rgba(255,255,255,0.7)] pl-5 hover:text-[#ffffff] hover:pl-[30px]
                  duration-300 ease-in-out font-dms font-normal text-[14px] border-b-[1px] border-[rgba(255,255,255,0.7)]"
                    >
                      Clothes
                    </li>
                    <li
                      className="py-2 text-[rgba(255,255,255,0.7)] pl-5 hover:text-[#ffffff] hover:pl-[30px]
                  duration-300 ease-in-out font-dms font-normal text-[14px]"
                    >
                      Bags
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="lg:w-2/4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="w-full bg-white py-3 pl-5 rounded-lg"
                />
                <div className="absolute top-[50%] right-6 translate-y-[-50%]">
                  <FaSearch />
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 relative">
              <div className="flex justify-end gap-x-3">
                <div className="flex" ref={accRef}>
                  <FaUser />
                  <FaChevronDown />
                </div>
                <div className="text-[#222]" ref={cartRef}>
                  <FaShoppingCart />
                </div>
              </div>
              {accShow && (
                <div className="w-[200px] absolute left-[27%] top-10">
                  <ul>
                    <li className="py-3 px-4 bg-[#FFFFFF] font-dms text-[14px] text-[#262626] text-center hover:bg-[#262626] hover:text-[#FFFFFF] hover:font-semibold duration-300 ease-in-out">
                      My Account
                    </li>
                    <li className="py-3 px-4 bg-[#FFFFFF] font-dms text-[14px] text-[#262626] text-center hover:bg-[#262626] hover:text-[#FFFFFF] hover:font-semibold duration-300 ease-in-out">
                      Log Out
                    </li>
                  </ul>
                </div>
              )}
              {cartShow && (
                <div className="absolute left-0 top-10 w-full">
                  <div className="flex items-center justify-around bg-[#F5F5F3]">
                    <div className="">
                      <img src={CartImg} alt="" />
                    </div>
                    <div className="">
                      <h4>Black Smart Watch</h4>
                      <h5>$44.00</h5>
                    </div>
                    <div className="">
                      <RxCross2 />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="mt-2">
                      <span className="text-[#767676]">Subtotal:</span> $44.00
                    </h3>
                    <ul className="flex justify-between mt-2">
                      <li className="py-3 w-[149px] bg-[#262626] font-dms text-[14px] text-[#FFFFFF] text-center hover:bg-[#FFFFFF] hover:text-[#262626] hover:font-semibold duration-300 ease-in-out border">
                        View Cart
                      </li>
                      <li className="py-3 w-[149px] bg-[#262626] font-dms text-[14px] text-[#FFFFFF] text-center hover:bg-[#FFFFFF] hover:text-[#262626] hover:font-semibold duration-300 ease-in-out border">
                        Checkout
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
