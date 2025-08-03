import Container from "./Container";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { useContext } from "react";
import { ApiData } from "./ContextApi";
import Slider from "react-slick";
import AdsImg from "../assets/ads.png"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  let {info} = useContext(ApiData);
  return (
    <div
      className="h-[64px] w-[64px] bg-[rgba(151,151,151,0.53)] hover:bg-[#979797] cursor-pointer top-[115px] absolute right-[10px] justify-center flex items-center rounded-full text-white hover:text-black"
      onClick={onClick}
    >
      <FaLongArrowAltRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className="h-[64px] w-[64px] bg-[rgba(151,151,151,0.53)] hover:bg-[#979797] hover:text-black cursor-pointer top-[115px] absolute z-10 left-[10px] text-white flex justify-center items-center rounded-full"
      onClick={onClick}
    >
      <FaLongArrowAltLeft />
    </div>
  );
}

const Arrivals = () => {
  let {info} = useContext(ApiData);
  let newSlider = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 476,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="">
      <Container>
        <h2 className="font-bold font-dms text-[40px] pb-10">New Arrivals</h2>

        <div className="">
          <Slider {...newSlider}>
            {info.map((item) => (
              <div className="!w-[95%]">
                <div className="relative group">
                  <div className="bg-[#D8D8D8]">
                    <img src={item.thumbnail} alt="" />
                  </div>
                  <div className="absolute right-0 cursor-pointer overflow-hidden h-0 group-hover:h-[130px] bottom-0 w-full bg-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-300 ease-in-out ">
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
                    <h3 className="md:font-bold font-medium font-dms md:text-[18px] text-[16px]">{item.title}</h3>
                    <p className="font-dms font-normal md:text-[16px] text-[12px] text-[#767676]">{item.brand}</p>
                  </div>
                  <div className="font-dms font-normal md:text-[16px] text-[12px] text-[#767676]">{item.price}</div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="md:pt-25 py-13 flex flex-wrap justify-between">
            {info.slice(13,17).map((item) => (
              <div className="md:w-[24%] w-[48%]">
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
                    <a className="bg-[#262626] md:px-8 px-4 md:py-2 py-[4px] text-white font-bold font-dms text-[14px]" href="#">New</a>
                  </div>
                </div>
                <div className="flex justify-between pt-2">
                  <div className="">
                    <h3 className="md:font-bold font-medium font-dms md:text-[18px] text-[16px]">{item.title}</h3>
                    <p className="font-dms font-normal md:text-[16px] text-[12px] text-[#767676]">{item.brand}</p>
                  </div>
                  <div className="font-dms font-normal md:text-[16px] text-[12px] text-[#767676]">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="md:pt-32 md:pb-32 pb-16 pt-16">
            <img src={AdsImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Arrivals;
