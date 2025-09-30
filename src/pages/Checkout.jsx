import React, { useState } from 'react'
import Container from '../Components/Container'

const Checkout = () => {
    const handleChange =(e) => {
    console.log();
    };
    
  return (
    <div className='py-10 font-dms'>
        <Container>
            <div className="">
              <div className="flex justify-between">
                  <div className="pb-6 flex flex-col">
                    <label>First Name</label>
                    <input onChange={handleChange} name='firstname' className='w-[508px] py-2 border-b border-[#F0F0F0] outline-none' placeholder='First Name' type="text" />
                </div>
                  <div className="pb-6 flex flex-col">
                    <label>Last Name</label>
                    <input className='w-[508px] py-2 border-b border-[#F0F0F0] outline-none' placeholder='Last Name' type="text" />
                </div>
              </div>
                <div className="pb-6 flex flex-col">
                    <label>Company Name (optional)</label>
                    <input className='w-[1055px]  py-2 border-b border-[#F0F0F0] outline-none' placeholder='Company Name' type="text" />
                </div>
                <div className="pb-6 flex flex-col">
                    <label>Country</label>
                    <input className='w-[1055px] py-2 border-b border-[#F0F0F0] outline-none' placeholder='Please Select' type="text" />
                </div>
                <div className="pb-6 flex flex-col">
                    <label>Street Address </label>
                    <input className='w-[1055px] py-2 border-b border-[#F0F0F0] outline-none' placeholder='House number and street name' type="text" />
                    <input className='w-[1055px] py-2 border-b border-[#F0F0F0] outline-none' placeholder='Apartment, suite, unit etc. (optional)' type="text" />
                </div>
                <div className="pb-6 flex flex-col">
                    <label>Town/City</label>
                    <input className='w-[1055px] py-2 border-b border-[#F0F0F0] outline-none' placeholder='Town/City' type="text" />
                </div>
                <div className="pb-6 flex flex-col">
                    <label>Post Code</label>
                    <input className='w-[1055px] border-b border-[#F0F0F0] outline-none' placeholder='Post Code' type="text" />
                </div>
                <div className="pb-6 flex flex-col">
                    <label>Phone</label>
                    <input className='w-[1055px] py-2 border-b border-[#F0F0F0] outline-none' placeholder='Phone' type="text" />
                </div>
                <div className="pb-6 flex flex-col">
                    <label>Email Address</label>
                    <input className='w-[1055px] py-2 border-b border-[#F0F0F0] outline-none' placeholder='Email' type="text" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Checkout