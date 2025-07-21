import Container from "./Container";
import Arrivals01 from "../assets/arrivalsImg01.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { useContext } from "react";
import { ApiData } from "./ContextApi";

const Arrivals = () => {
    let data = useContext(ApiData)
    console.log(data);
    
  return (
    <div className="">
      <Container>
        <h2 className="font-bold font-dms text-[40px]">New Arrivals</h2>

        <div className="">
          <div className="w-[25%]">
            <div className="relative group">
              <div className="">
                <img src={Arrivals01} alt="" />
              </div>
              <div className="absolute left-0 bottom-0 w-full bg-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                <ul className="pr-4">
                  <li className="flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]">
                    <span className="">Add to Wish List</span>
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
            </div>

            <div className="flex justify-between">
              <div className="">
                <h3>Basic Crew Neck Tee</h3>
                <p className="pt-3">Black</p>
              </div>
              <div className="">$44.00</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Arrivals;
