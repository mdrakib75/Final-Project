import { useContext } from "react";
import { ApiData } from "./ContextApi";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import Container from "./Container";

const Special = () => {
  let spec = useContext(ApiData);
  return (
    <>
      <Container>
        <h2 className="font-bold font-dms text-[40px] pt-10">Special Offers</h2>
        <div className="py-25 flex justify-between">
          {spec.slice(10, 14).map((item) => (
            <div className="!w-[24%]">
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
                    className="bg-[#262626] px-8 py-2 text-white font-bold font-dms text-[14px]"
                    href="#"
                  >
                    New
                  </a>
                </div>
              </div>
              <div className="flex justify-between pt-2">
                <div className="">
                  <h3>{item.title}</h3>
                  <p>{item.brand}</p>
                </div>
                <div className="">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
export default Special;
