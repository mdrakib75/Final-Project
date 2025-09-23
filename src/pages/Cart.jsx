import React from "react";
import Container from "../Components/Container";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import productImg from "../assets/productImg.png";
import { useSelector } from "react-redux";

const Cart = () => {
  const data = useSelector((state) => state.cartDetails.cartItems);
  console.log(data ,"Data");
  return (
    <div>
      <Container>
        <div className="mt-31">
          <h3 className="text-primary font-dms font-bold text-[49px]">Cart</h3>
          <div className="pt-3">
            <ul className="flex">
              <li className="flex items-center ">
                <Link
                  className="font-dms font-normal text-[12px] text-[#767676] hover:text-black"
                  to="/"
                >
                  Home
                </Link>
                <div className="text-[13px] px-[5px] text-[#767676]">
                  <FaChevronRight />
                </div>
              </li>
              <li className="flex items-center">
                <a
                  className="font-dms font-normal text-[12px] text-[#767676]  hover:text-black"
                  href=""
                >
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-35 ">
          <div className=" flex justify-between py-[34px] px-[20px] bg-[#F5F7F7]">
            <div className="w-[25%] font-bold font-dms text-primary">
              Product
            </div>
            <div className="w-[25%] font-bold font-dms text-primary">Price</div>
            <div className="w-[25%] font-bold font-dms text-primary">
              Quantity
            </div>
            <div className="w-[25%] font-bold font-dms text-primary">Total</div>
          </div>

  <div className=" flex justify-between items-center py-[34px] px-[20px]">
              <div className="flex items-center w-[25%] font-bold font-dm">
                <img className="w-[70px]" src={productImg} alt="" />
                <p>Product name</p>
              </div>
              <div className="w-[25%] font-bold font-dms text-[20px] text-primary">
                $44.00
              </div>
              <div className="w-[25%] font-bold font-dms text-primary">
                <div className="flex items-center border-2 border-[#F0F0F0] w-fit px-[21px] space-x-[35px]">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
              </div>
              <div className="w-[25%] font-bold font-dms text-[20px] text-primary">
                $44.00
              </div>
            </div>
          {/* {data.map((item) => (
          
          ))} */}
        </div>
      </Container>
    </div>
  );
};

export default Cart
