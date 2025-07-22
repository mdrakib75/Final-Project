import Ban from "../assets/banner.png";
import Slider from "react-slick";
import Container from "./Container";
import { PiNumberTwoBold } from "react-icons/pi";
import { MdLocalShipping } from "react-icons/md";
import { FaArrowRotateLeft } from "react-icons/fa6";


const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows:false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
     appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position:"absolute",
          left:"10%",
          top:"50%",
          transform:"translateY(-50%)"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "25px",
          padding:"10px 0",
          color: "transparent",
          borderRight: "2px white solid"
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <div id="banner" className="border-b-2 border-[#F0F0F0] pb-3">
      <Slider {...settings}>
        <div className="">
          <img src={Ban} alt="" />
        </div>
        <div className="">
          <img src={Ban} alt="" />
        </div>
        <div className="">
          <img src={Ban} alt="" />
        </div>
      </Slider>

      <Container>
        <div className="flex justify-between">
            <div className="w-1/3 flex items-center justify-center">
            <div className="text-[20px]">
                <PiNumberTwoBold/>
            </div>
            <p className="pl-3 text-[#6D6D6D] font-dms font-normal text-[16px]">Two years warranty</p>
            </div>
            <div className="w-1/3 flex items-center justify-center">
            <div className="text-[20px]">
                <MdLocalShipping/>
            </div>
            <p className="pl-3 text-[#6D6D6D] font-dms font-normal text-[16px]">Free shipping</p>
            </div>
            <div className="w-1/3 flex items-center justify-center">
            <div className="">
                <FaArrowRotateLeft/>
            </div>
            <p className="pl-3 text-[#6D6D6D] font-dms font-normal text-[16px]">Return policy in 30 days</p>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
