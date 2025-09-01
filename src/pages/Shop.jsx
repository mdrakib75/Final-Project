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

  let [ShopCate, setShopCate] = useState(false);
  let [ShopColor, setShopColor] = useState(false);
  let [ShopBrand, setShopBrand] = useState(false);
  let [ShopPrice, setShopPrice] = useState(false);
  let [PerPage, setPerPage] = useState(6);
  let [currentPage, setCurrentPage] = useState(1);
  let [Category, setCategory] = useState([]);
  let [cateFilter, setCateFilter] = useState([]);
  let [active, setActive] = useState("");
  let [low, setLow] = useState();
  let [high, setHigh] = useState();
  let [brand, setBrand] = useState();

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

  let next = () => {
    if (currentPage < PageNumber.length) {
      setCurrentPage((state) => state + 1);
    }
  };
  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  };

  useEffect(() => {
    setCategory([...new Set(info.map((item) => item.category))]);
    setBrand([...new Set(info.map((item) => item.brand))]);
  }, [info]);

  let handleCategory = (cateItem) => {
    let categoryFilter = info.filter((item) => item.category == cateItem);
    setCateFilter(categoryFilter);
  };

  let handleList = () => {
    setActive("active");
  };

  let handleChange = (e) => {
    setPerPage(e.target.value);
  };

  let handlePrice = (value) => {
    setLow(value.low);
    setHigh(value.high);
    let PriceShow = info.filter(
      (item) => item.price >= value.low && item.price <= value.high
    );
    setCateFilter(PriceShow);
  };


   let handleBrand = (bItem) => {
    let brandFilter = info.filter((item) => item.brand == bItem)
    setCateFilter(brandFilter)
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
                onClick={() => setShopCate(!ShopCate)}
                className="flex items-center justify-between pr-7 font-bold font-dms text-[20px]"
              >
                Shop by Category{" "}
                {ShopCate ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </h2>
              {ShopCate && (
                <ul className="pr-7">
                  {Category.map((item) => (
                    <Link key={item}>
                      <li
                        key={item}
                        onClick={() => handleCategory(item)}
                        className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7 capitalize"
                      >
                        {item}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>

            <div className="py-5">
              <h2
                onClick={() => setShopColor(!ShopColor)}
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
                onClick={() => setShopBrand(!ShopBrand)}
                className="flex items-center justify-between pr-7 font-bold font-dms text-[20px]"
              >
                Shop by Brand{" "}
                {ShopBrand ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </h2>
              {ShopBrand && (
                <ul className="pr-7">
                  {brand.map((item) => (
                    <li key={item} onClick={() => handleBrand(item)} className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="py-5">
              <h2
                onClick={() => setShopPrice(!ShopPrice)}
                className="flex items-center justify-between pr-7 font-bold font-dms text-[20px]"
              >
                Shop by Price{" "}
                {ShopPrice ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </h2>
              {ShopPrice && (
                <ul className="pr-7">
                  <li
                    onClick={() => handlePrice({ low: 0, high: 9 })}
                    className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7"
                  >
                    $0.00 - $9.99
                  </li>
                  <li
                    onClick={() => handlePrice({ low: 10, high: 19 })}
                    className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7"
                  >
                    $10.00 - $19.99
                  </li>
                  <li
                    onClick={() => handlePrice({ low: 20, high: 29 })}
                    className="border-b-1 border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7"
                  >
                    $20.00 - $29.99
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-2/3">
            <div className=""></div>
            <div className="flex justify-between pt-5">
              <div className="flex">
                <div
                  onClick={() => setActive("")}
                  className={`${
                    active == "active"
                      ? " hover:text-white justify-center flex items-center hover:bg-[#262626] h-7 w-7 hover:text border-1 border-[#F0F0F0]"
                      : " hover:text-white justify-center bg-[#262626] text-white flex items-center hover:bg-[#262626] h-7 w-7 hover:text border-1 border-[#F0F0F0]"
                  }`}
                >
                  <FaWindows />
                </div>
                <div
                  onClick={handleList}
                  className={` ${
                    active == "active"
                      ? "ml-5 text-white bg-[#262626] hover:text-white justify-center flex items-center hover:bg-[#262626] h-7 w-7 hover:text border-1 border-[#F0F0F0]"
                      : "ml-5 hover:text-white justify-center flex items-center hover:bg-[#262626] h-7 w-7 hover:text border-1 border-[#F0F0F0]"
                  } `}
                >
                  <VscThreeBars />
                </div>
              </div>
              <div className="flex justify-between">
                <form className="flex mr-10 max-w-sm mx-auto">
                  <label
                    htmlFor="countries"
                    className="block pr-[14px] mt-2 text-sm font-dms font-normal text-[#767676] dark:text-white"
                  >
                    Sort by:
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 w-[239px] border border-gray-300  outline-none text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="country">Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
                <form className="flex max-w-sm mx-auto">
                  <label
                    htmlFor="countries"
                    className="block pr-[14px] mt-2 text-sm font-dms font-normal text-[#767676] dark:text-white"
                  >
                    Show:
                  </label>
                  <select
                    id="countries"
                    onChange={handleChange}
                    className=" outline-none bg-gray-50 w-[139px] border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="">
              <Page allData={allData} cateFilter={cateFilter} active={active} />
              <div className="flex items-center justify-between py-25">
                <Pagination
                  PageNumber={PageNumber}
                  paginate={paginate}
                  currentPage={currentPage}
                  info={info}
                  next={next}
                  prev={prev}
                  cateFilter={cateFilter}
                />
                <h4 className="font-dms font-normal text-[14px] text-[#767676]">
                  Products from {currentPage} to {PerPage} of {info.length}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Shop;
