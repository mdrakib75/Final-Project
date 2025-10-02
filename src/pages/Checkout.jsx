import React, { useState } from "react";
import Container from "../Components/Container";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Checkout = () => {
    const data = useLocation()
    const Price = (data.state.SubTotalPrice);
    
  const [checkout, setCheckout] = useState({
    FirstName: "",
    LastName: "",
    CompanyName: "",
    Country: "",
    StreetAddress: "",
    TownCity: "",
    PostCode: "",
    Phone: "",
    Email: "",
  });

  const handleChange = (e) => {
    setCheckout({ ...checkout, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    console.log(checkout);
  };

  return (
    <div className="py-10 font-dms">
      <Container>
        <div className="py-31">
          <h1 className="font-bold text-[49px]">Checkout</h1>
          <div className="pt-2">
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
                  Checkout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
            <div className="pb-30">
                <p>TotalProductPrice:{Price.toFixed(2)}</p>
            </div>
          <h1 className="font-bold text-[39px] pb-[42px]">Billing Details</h1>
          <div className="flex">
            <div className="pb-6 flex flex-col">
              <label className="font-bold text-[16px]">First Name</label>
              <input
                onChange={handleChange}
                name="FirstName"
                value={checkout.FirstName}
                className="w-[508px] py-2 border-b border-[#F0F0F0] outline-none"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="pb-6 ml-10 flex flex-col">
              <label className="font-bold font-dms text-[16px]">
                Last Name
              </label>
              <input
                onChange={handleChange}
                name="LastName"
                value={checkout.LastName}
                className="w-[508px] py-2 border-b border-[#F0F0F0] outline-none"
                placeholder="Last Name"
                type="text"
              />
            </div>
          </div>
          <div className="pb-6 flex flex-col">
            <label className="font-bold font-dms text-[16px]">
              Company Name (optional)
            </label>
            <input
              onChange={handleChange}
              name="CompanyName"
              value={checkout.CompanyName}
              className="w-[1055px]  py-2 border-b border-[#F0F0F0] outline-none"
              placeholder="Company Name"
              type="text"
            />
          </div>
          <div className="pb-6 flex flex-col">
            <label className="font-bold font-dms text-[16px]">Country</label>
            <input
              onChange={handleChange}
              name="Country"
              value={checkout.Country}
              className="w-[1055px] py-2 border-b border-[#F0F0F0] outline-none"
              placeholder="Please Select"
              type="text"
            />
          </div>
          <div className="pb-6 flex flex-col">
            <label className="font-bold font-dms text-[16px]">
              Street Address{" "}
            </label>
            <input
              onChange={handleChange}
              name="StreetAddress"
              value={checkout.StreetAddress}
              className="w-[1055px] py-2 border-b border-[#F0F0F0] outline-none"
              placeholder="House number and street name"
              type="text"
            />
            <input
              onChange={handleChange}
              name="StreetAddress"
              value={checkout.StreetAddress}
              className="w-[1055px] py-2 border-b border-[#F0F0F0] outline-none"
              placeholder="Apartment, suite, unit etc. (optional)"
              type="text"
            />
          </div>
          <div className="pb-6 flex flex-col">
            <label className="font-bold font-dms text-[16px]">Town/City</label>
            <input
              onChange={handleChange}
              name="TownCity"
              value={checkout.TownCity}
              className="w-[1055px] py-2 border-b border-[#F0F0F0] outline-none"
              placeholder="Town/City"
              type="text"
            />
          </div>
          <div className="pb-6 flex flex-col">
            <label className="font-bold font-dms text-[16px]">Post Code</label>
            <input
              onChange={handleChange}
              name="PostCode"
              value={checkout.PostCode}
              className="w-[1055px] border-b border-[#F0F0F0] outline-none"
              placeholder="Post Code"
              type="text"
            />
          </div>
          <div className="pb-6 flex flex-col">
            <label className="font-bold font-dms text-[16px]">Phone</label>
            <input
              onChange={handleChange}
              name="Phone"
              value={checkout.Phone}
              className="w-[1055px] py-2 border-b border-[#F0F0F0] outline-none"
              placeholder="Phone"
              type="text"
            />
          </div>
          <div className="pb-6 flex flex-col">
            <label className="font-bold font-dms text-[16px]">
              Email Address
            </label>
            <input
              onChange={handleChange}
              name="Email"
              value={checkout.Email}
              className="w-[1055px] py-2 border-b border-[#F0F0F0] outline-none"
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="py-3 flex flex-col">
            <Link to="/checkout">
              <p
                onClick={handleClick}
                className=" text-center w-[400px] bg-primary cursor-pointer font-bold font-dms text-[14px] px-7 py-4 inline-block text-white"
              >
                Checkout
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
