import React, { useState } from "react";
import Container from "../Components/Container";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import productImg from "../assets/productImg.png";
import { useDispatch, useSelector } from "react-redux";
import { cartQuantity, cartRemove } from "../slice/cartSlice";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState("");
  const data = useSelector((state) => state.cartDetails.cartItems);

  const totalPrice = data.reduce((prev, current) => {
    return prev + current.price * current.cartQun;
  }, 0);

  const handleIncrement = (id) => {
    console.log(id, "id");
    dispatch(cartQuantity({ id: id, type: "increment" }));
  };

  const handleDecrement = (id) => {
    dispatch(cartQuantity({ id: id, type: "decrement" }));
  };

  const handleChange = (e) => {
    setCoupon(e.target.value);
  };
  console.log(coupon);

  const handleApply = () => {
    if (coupon == "FDR20") {
      setDiscount(totalPrice * 0.2);
    }
  };
  const Total = totalPrice - discount;

  const handleRemove = (index) => {
    console.log("ok", index);
    dispatch(cartRemove(index));
  };
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
                  className="font-dms font-normal text-[12px] text-[#767676] hover:text-black"
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

          {data.length > 0
            ? data?.map((item, index) => (
                <div className=" border border-[#F0F0F0] flex justify-between items-center py-[34px] px-[20px]">
                  <div className="flex items-center w-[25%] font-bold font-dm">
                    <p
                      onClick={() => handleRemove(index)}
                      className="cursor-pointer pr-7 text-[20px]"
                    >
                      <RxCross2 />
                    </p>
                    <img
                      className="w-[70px] bg-[#D8D8D8]"
                      src={item.thumbnail}
                      alt=""
                    />
                    <p className="pl-3">{item.title}</p>
                  </div>
                  <div className="w-[25%] font-bold font-dms text-[20px] text-primary">
                    ${item.price}
                  </div>
                  <div className="w-[25%] font-bold font-dms text-primary">
                    <div className="flex items-center border-2 border-[#F0F0F0] w-fit px-[21px] space-x-[35px]">
                      <p
                        className="cursor-pointer"
                        onClick={() => handleDecrement(index)}
                      >
                        -
                      </p>
                      <p>{item.cartQun}</p>
                      <p
                        className="cursor-pointer"
                        onClick={() => handleIncrement(index)}
                      >
                        +
                      </p>
                    </div>
                  </div>
                  <div className="w-[25%] font-bold font-dms text-[20px] text-primary">
                    ${item.price * item.cartQun}
                  </div>
                </div>
              ))
            : "no items"}

          <div className=" flex items-center justify-between border-2 py-5 px-5 border-[#F0F0F0]">
            <div className="">
              <input
                onChange={handleChange}
                className="rounded border-[#F0F0F0] h-[50px] border py-3 pl-3"
                type="text"
                placeholder="Apply Coupon"
              />
              <button
                onClick={handleApply}
                className="bg-primary text-white px-4 py-2 rounded ml-5 "
              >
                Apply coupon
              </button>
            </div>
            <div className="">
              <h3 className="font-bold font-dms text-[14px]">Update cart</h3>
            </div>
          </div>
          <div className="pt-[54px] pb-[24px]">
            <h3 className="text-end font-dms font-bold text-[20px]">
              Cart totals
            </h3>
          </div>
          <div className=" flex justify-end">
            <div className=" w-[645px]">
              <div className="flex flex-wrap border border-[#F0F0F0]">
                <div className="w-1/2 border-r border-[#F0F0F0]">
                  <h3 className="pl-3 py-4">Subtotal</h3>
                </div>
                <div className="w-1/2">
                  <h3 className="pl-3 py-4">${totalPrice.toFixed(2)}</h3>
                </div>
                <div className="w-1/2 border-t border-r border-[#F0F0F0]">
                  <h3 className="pl-3 py-4">Discount</h3>
                </div>
                <div className="w-1/2 border-t border-[#F0F0F0]">
                  <h3 className="pl-3 py-4">${discount}</h3>
                </div>
                <div className="w-1/2 border-t border-r border-[#F0F0F0]">
                  <h3 className="pl-3 py-4">Total</h3>
                </div>
                <div className="w-1/2 border-t border-[#F0F0F0]">
                  <h3 className="pl-3 py-4">${Total.toFixed(2)}</h3>
                </div>
              </div>
              <div className="text-end pt-10">
                <Link to="/checkout">
                 <p className="bg-primary cursor-pointer font-bold font-dms text-[14px] px-7 py-4 inline-block text-white">
                  Proceed to Checkout
                </p>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
