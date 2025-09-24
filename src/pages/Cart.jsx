import React from "react";
import Container from "../Components/Container";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import productImg from "../assets/productImg.png";
import { useDispatch, useSelector } from "react-redux";
import { cartQuantity } from "../slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.cartDetails.cartItems);
  console.log(data ,"Data");

  const handleIncrement = (item) =>{
    console.log("Ok",item);
    dispatch(cartQuantity(item));
  }
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

          {
            data.length > 0 ?
             data?.map((item) => (
           <div  className=" flex justify-between items-center py-[34px] px-[20px]">
              <div className="flex items-center w-[25%] font-bold font-dm">
                <img className="w-[70px] bg-[#D8D8D8]" src={item.thumbnail} alt="" />
                <p className="pl-3">{item.title}</p>
              </div>
              <div className="w-[25%] font-bold font-dms text-[20px] text-primary">
                ${item.price}
              </div>
              <div className="w-[25%] font-bold font-dms text-primary">
                <div className="flex items-center border-2 border-[#F0F0F0] w-fit px-[21px] space-x-[35px]">
                  <p className="cursor-pointer">-</p>
                  <p>{item.cartQun}</p>
                  <p className="cursor-pointer" onClick={()=>handleIncrement(item)}>+</p>
                </div>
              </div>
              <div className="w-[25%] font-bold font-dms text-[20px] text-primary">
                ${item.price * item.cartQun}
              </div>
            </div>
          ))
          : "no items"
          }

         

        </div>
      </Container>
    </div>
  );
};

export default Cart
