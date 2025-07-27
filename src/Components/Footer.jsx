import Container from "./Container";
import logo from "../assets/Logo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-[#D8D8D8] h-[374px] pt-27">
        <Container>
             <div className="flex">
            <div className="w-1/5">
              <h3 className="pb-4 font-bold font-dms text-[16px]">MENU</h3>
              <ul className="">
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Home</li>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Shop</li>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">About</li>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Contact</li>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Journal</li>
              </ul>
            </div>
            <div className="w-1/5">
              <h3 className="pb-4 font-bold font-dms text-[16px]">SHOP</h3>
              <ul>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Category 1</li>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Category 2</li>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Category 3</li>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Category 4</li>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Category 5</li>
              </ul>
            </div>
            <div className="w-1/5">
              <h3 className="pb-4 font-bold font-dms text-[16px]">HELP</h3>
              <ul>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Privacy Policy</li>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Terms & Conditions</li>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Special E-shop</li>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Shipping</li>
                <li className="font-dms font-normal text-[14px] text-[#6D6D6D] py-1">Secure Payments</li>
              </ul>
            </div>
            <div className="w-1/5">
              <h3 className="font-bold font-dms text-[16px]">(052) 611-5711</h3>
              <h4 className="font-bold font-dms text-[16px]">company@domain.com</h4>
            </div>
            <div className="w-1/5">
            <div className="">
                <img src={logo} alt="" />
            </div>
            </div>
          </div>
          <div className="flex justify-between">
             <div className="w-1/2">
             <div className="flex pt-13 gap-x-3">
            <div className="">
                <FaFacebookF />
            </div>
            <div className="">
                <FaLinkedinIn />
            </div>
            <div className="">
                <FaInstagram />
            </div>
          </div>
          </div>
          <div className="w-1/2">
             <p className="pt-13 font-dms font-normal text-end text-[14px] text-[#6D6D6D]">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
          </div>
         
         
        </Container>
      </div>
    </>
  );
};

export default Footer;
