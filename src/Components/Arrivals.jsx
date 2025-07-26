import Container from "./Container";
import Arrivals01 from "../assets/arrivalsImg01.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { useContext } from "react";
import { ApiData } from "./ContextApi";
import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight  } from "react-icons/fa";



function SampleNextArrow(props) {
  const { className, onClick } = props;
  let data = useContext(ApiData);
  return (
    <div
      className="h-[64px] w-[64px] bg-[rgba(151,151,151,0.53)] hover:bg-[#979797] cursor-pointer top-[115px] absolute right-[10px] justify-center flex items-center rounded-full text-white hover:text-black"
      onClick={onClick}
    >
      <FaLongArrowAltRight/>
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
        <FaLongArrowAltLeft/>
      </div>
  );
}

const Arrivals = () => {
  let data = useContext(ApiData);
  let newSlider = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint:476,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };
  return (
    <div className="">
      <Container>
        <h2 className="font-bold font-dms text-[40px]">New Arrivals</h2>

        <div className="">
          <Slider {...newSlider}>
            {data.map((item) => (
              <div className="!w-[95%]">
                <div className="relative group">
                  <div className="">
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
                    <h3>{item.title}</h3>
                    <p className="pt-3">{item.brand}</p>
                  </div>
                  <div className="">{item.price}</div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="pt-25">
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Arrivals;
