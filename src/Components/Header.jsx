import React, { useState } from "react";
import Container from "./Container";
import logo from "../assets/Logo.png";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link} from "react-router-dom";

const Header = () => {

  let [show, setShow] = useState(false)

  return (
    <>
    <header className={`sticky top-0 z-10 bg-[#ffffff] lg:py-3 ${show ? "mb-0" : "mb-8 lg:mb-0"}`}>
      <Container>
        <div className="lg:flex items-center">
          <div className="lg:w-1/3">
            <div className="mt-2">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className=" w-full lg:w-2/3">
            <ul className={`lg:flex gap-x-7 mt-2 duration-300 ease-in-out ${show== true ? "bg-[#F5F5F3]" : " mt-[-150px] lg:mt-0"}`}>
              <li>
                <Link  className="text-[14px] text-[#767676] font-dms font-normal hover:text-[#262626] duration-300 ease-in-out text-capitalize" to="/">Home</Link>
              </li>
              <li>
                <Link  className="text-[14px] text-[#767676] font-dms font-normal hover:text-[#262626] duration-300 ease-in-out text-capitalize" to="/shop">Shop</Link>
              </li>
              <li>
                <Link  className="text-[14px] text-[#767676] font-dms font-normal hover:text-[#262626] duration-300 ease-in-out text-capitalize"  to="*">About</Link>
              </li>
              <li>
                <Link  className="text-[14px] text-[#767676] font-dms font-normal hover:text-[#262626] duration-300 ease-in-out text-capitalize"  to="*">Contacts</Link>
              </li>
              <li>
                <Link  className="text-[14px] text-[#767676] font-dms font-normal hover:text-[#262626] duration-300 ease-in-out text-capitalize"  to="*">Journal</Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden absolute top-2 right-2" onClick={()=>setShow(!show)}>
            {show ? <RxCross2/> : <FaBars/> }
          </div>
        </div>
      </Container>
    </header>
      
    </>
  );
};

export default Header;
