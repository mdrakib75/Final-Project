import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../Components/Container';
import productImg from "../assets/productImg.png"
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa6';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { ProductRating } from '../Components/ProductRating';
import { useDispatch } from 'react-redux';
import { cartTotal } from '../slice/cartSlice';

const ProductDetails = () => {

  const dispatch = useDispatch()
  const [features , setFeatures] = useState(false)
  const [shipping , setShipping] = useState(false)

  const {id} = useParams()
  const [singleData, setSingleData] = useState({});
  

  const getSingleData = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setSingleData(response.data)
    })
  }

  useEffect(() => {
    getSingleData()
  },[])

  const handleAdd = () => {
    // console.log("Ok");
    dispatch(cartTotal(singleData))
  }
  
  return (
    <div>
    <Container>
      <div className="pt-[152px] pb-[339px] font-dms">
         <div className="flex flex-wrap justify-between gap-7">
           {
            singleData?.images?.map((img)=> (
              <img key={img} className='w-[40%] bg-[#D8D8D8]' src={img} alt="" />
            ))
           }
         </div>
         <div className=" pt-[49px]">
          <h3 className='text-[39px] font-bold text-primary'>Product</h3>
          <div className="flex items-center space-x-[25px] pt-[15px] pb-[21px]">
           <div className="flex space-x-2 text-[#FFD881]">
            {/* <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar /> */}
            <ProductRating rating={singleData.rating}/>
           </div>
           <div className="flex space-x-5">
            <p className='text-[#767676] font-dms font-normal text-[14px]'>Rating({singleData.rating})</p>
            <p className='text-[#767676] font-dms font-normal text-[14px]'> {singleData?.reviews?.length} Review</p>
           </div>
          </div>
          <div className="flex space-x-[22px] items-center">
            <p className='text-[#767676] font-normal text-[16px]'><del>${singleData.discountPercentage}</del></p>
            <p className='font-bold text-[20px]'>${singleData.price}</p>
          </div>
         </div>


         <hr className='w-[780px] text-[#D8D8D8] mt-[24px]'></hr>
         <div className="flex items-center space-x-[53px] pt-[29px]">
          <p className='font-dms font-bold text-[16px]'>COLOR:</p>
        <div className="flex items-center space-x-[15px]">
            <div className="h-[20px] w-[20px] bg-[#979797] rounded-full">
          </div>
          <div className="h-[28px] w-[28px] bg-[#FF8686] rounded-full">
          </div>
          <div className="h-[20px] w-[20px] bg-[#7ED321] rounded-full">
          </div>
          <div className="h-[20px] w-[20px] bg-[#979797] rounded-full">
          </div>
          <div className="h-[20px] w-[20px] bg-[#15CBA5] rounded-full">
          </div>
        </div>
         </div>


         <div className="flex items-center space-x-[53px] pt-[29px]">
          <p className='font-bold font-dms text-[16px]'>SIZE:</p>
          <select className=' border-2 border-[#F0F0F0] w-[139px] h-[36px] pl-[21px]'>
            <option className='' value="s">S</option>
          </select>
         </div>


         <div className="flex items-center space-x-[53px] pt-[29px]">
          <p className='font-bold font-dms text-[16px]'>QUANTITY:</p>
          <div className='flex items-center border-2 border-[#F0F0F0] px-[21px] space-x-[35px]'>
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
         </div>


          <hr className='w-[780px] text-[#D8D8D8] mt-[24px]'></hr>
         <div className="flex items-center space-x-[53px] pt-[29px]">
          <p className='font-bold font-dms text-[16px]'>STATUS:</p>
          <div className=''>
            <p className='text-[#767676] font-dms font-normal'>{singleData.stock}</p>
          </div>
         </div>


          <hr className='w-[780px] text-[#D8D8D8] mt-[24px]'></hr>
           <div className="flex items-center space-x-[53px] pt-[29px]">
            <button className=' cursor-pointer py-4 px-10 border hover:bg-white hover:text-[#292929] duration-300 ease-in-out bg-[#292929] font-bold text-white'>Add to Wish List</button>
            <button onClick={handleAdd} className='cursor-pointer py-4 px-10 border  hover:bg-white hover:text-[#292929] duration-300 ease-in-out bg-[#292929] font-bold text-white'>Add to Cart</button>
          </div>

             <hr className='w-[780px] text-[#D8D8D8] mt-[24px]'></hr>
                  <div className="w-[780px] py-5">
                        <h2
                          onClick={() => setFeatures(!features)}
                          className="flex items-center justify-between pr-7 font-bold font-dms text-[16px]"
                        >
                          FEATURES  & DETAILS{" "}
                          {features ? <FaMinus /> : <FaPlus />}
                        </h2>
                        {features && (
                          <ul className="pr-7">
                            <li className=" border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                          </ul>
                        )}
                   </div>
             <hr className='w-[780px] text-[#D8D8D8] mt-[24px]'></hr>
                  <div className="w-[780px] py-5">
                        <h2
                          onClick={() => setShipping(!shipping)}
                          className="flex items-center justify-between pr-7 font-bold font-dms text-[16px]"
                        >
                          SHIPPING & RETURNS{" "}
                          {shipping ? <FaMinus /> : <FaPlus />}
                        </h2>
                        {shipping && (
                          <ul className="pr-7">
                            <li className=" border-[#D8D8D8] pb-5 text-[16px] font-normal font-dms text-[#767676] pt-7">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                          </ul>
                        )}
                   </div>
      </div>
    </Container>
    </div>
  )
}

export default ProductDetails