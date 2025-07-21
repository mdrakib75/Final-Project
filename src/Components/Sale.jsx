import React from 'react'
import Container from './Container'
import saleImg01 from "../assets/sale01.png"
import saleImg02 from "../assets/sale02.png"
import saleImg03 from "../assets/sale03.png"

const Sale = () => {
  return (
    <div className="py-43">
        <Container>
            <div className="flex justify-between">
              <div className="w-[49%]">
                <img src={saleImg01} alt="" />
              </div>
              <div className="w-[49%]">
                <div className="pb-9">
                  <img src={saleImg02} alt="" />
                </div>
                <div className="">
                  <img src={saleImg03} alt="" />
                </div>
              </div>
            </div>
        </Container>
    </div>
  )
}

export default Sale