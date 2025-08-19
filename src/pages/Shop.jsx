import { Link, Links } from "react-router-dom";
import Container from "../Components/Container";
import { FaChevronRight, FaWindows } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Pagination from "../Components/Pagination";
import Page from "../Components/Page";
import { ApiData } from "../Components/ContextApi";
import { VscThreeBars } from "react-icons/vsc";

const Shop = () => {
  let { info } = useContext(ApiData);

  let [ShopCate, SetShopCate] = useState(false);
  let [ShopColor, SetShopColor] = useState(false);
  let [ShopBrand, SetShopBrand] = useState(false);
  let [ShopPrice, SetShopPrice] = useState(false);
  let [PerPage, setPerPage] = useState(6);
  let [currentPage, setCurrentPage] = useState(1);
  let [Category, setCategory] = useState([]);
  let [cateFilter, setCateFilter] = useState([])

  let lastPage = PerPage * currentPage;
  let firstPage = lastPage - PerPage;
  let allData = info.slice(firstPage, lastPage);

  let PageNumber = [];
  for (let i = 0; i < Math.ceil(info.length / PerPage); i++) {
    PageNumber.push(i);
  }
  let paginate = (index) => {
    setCurrentPage(index + 1);
  };

  let next = () =>{
    if(currentPage < PageNumber.length){
      setCurrentPage((state) => state + 1)
    }
    
  }

  let prev = () =>{
    if(currentPage > 1){
      setCurrentPage((state) => state - 1)
    }
  }

  useEffect(()=>{
    setCategory([...new Set(info.map((item) => item.category))])
  },[info])

  let handleCategory = (cateItem) =>{
    let categoryFilter = info.filter((item) => item.category == cateItem)
    setCateFilter(categoryFilter)
  }
  
  return (
    <>
      <Container>
        <div className="pt-31">
          <h2 className="font-dms font-bold text-5xl">Products</h2>
        </div>
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
                Products
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between pt-31">
          <div className="w-1/3">
            <div className="py-5">
              <h2
                onClick={() => SetShopCate(!ShopCate)}
                className="flex items-center justify-between pr-7 font-bold font-dms text-[20px]"
              >
                Shop by Category{" "}
                {ShopCate ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </h2>
              {ShopCate && (
                <ul className="pr-7">
                  {Category.map((item)=>(
                    <Link>
                        <li key={item} onClick={()=>handleCategory(item)} className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7 capitalize">
                        {item}
                      </li>
                    </Link>
                      
                  ))}
                </ul>
              )}
            </div>

            <div className="py-5">
              <h2
                onClick={() => SetShopColor(!ShopColor)}
                className="flex items-center justify-between pr-7 font-bold font-dms text-[20px]"
              >
                Shop by Color{" "}
                {ShopColor ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </h2>
              {ShopColor && (
                <ul className="pr-7">
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    Color 1
                  </li>
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    Color 2
                  </li>
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    Color 3
                  </li>
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    Color 4
                  </li>
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    Color 5
                  </li>
                </ul>
              )}
            </div>
            <div className="py-5">
              <h2
                onClick={() => SetShopBrand(!ShopBrand)}
                className="flex items-center justify-between pr-7 font-bold font-dms text-[20px]"
              >
                Shop by Brand{" "}
                {ShopBrand ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </h2>
              {ShopBrand && (
                <ul className="pr-7">
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    Brand 1
                  </li>
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    Brand 2
                  </li>
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    Brand 3
                  </li>
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    Brand 4
                  </li>
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    Brand 5
                  </li>
                </ul>
              )}
            </div>
            <div className="py-5">
              <h2
                onClick={() => SetShopPrice(!ShopPrice)}
                className="flex items-center justify-between pr-7 font-bold font-dms text-[20px]"
              >
                Shop by Price{" "}
                {ShopPrice ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </h2>
              {ShopPrice && (
                <ul className="pr-7">
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    $0.00 - $9.99
                  </li>
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    $10.00 - $19.99
                  </li>
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    $20.00 - $29.99
                  </li>
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    $30.00 - $39.99
                  </li>
                  <li className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                    $40.00 - $69.99
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-2/3">
            <div className=""></div>
            <div className="flex pt-5">
              <div className=" hover:text-white justify-center flex items-center hover:bg-[#262626] h-7 w-7 hover:text border-1 border-[#F0F0F0]">
                <FaWindows />
              </div>
              <div className=" ml-5 hover:text-white justify-center flex items-center hover:bg-[#262626] h-7 w-7 hover:text border-1 border-[#F0F0F0]">
                <VscThreeBars />
              </div>
            </div>
            <Page allData={allData} cateFilter = {cateFilter} />
            <div className="flex items-center justify-between py-25">
              <Pagination
                PageNumber={PageNumber}
                paginate={paginate}
                currentPage={currentPage}
                info={info}
                next={next}
                prev={prev}
              />
              <h4 className="font-dms font-normal text-[14px] text-[#767676]">
                Products from {currentPage} to {PerPage} of {info.length}
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Shop;
