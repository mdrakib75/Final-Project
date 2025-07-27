import Container from './Container'
import saleImg01 from "../assets/sale01.png"
import saleImg02 from "../assets/sale02.png"
import saleImg03 from "../assets/sale03.png"

const Sale = () => {
  return (
    <div className="md:py-43 py-22">
        <Container>
            <div className="flex justify-between gap-x-4">
              <div className="md:w-[48%] ">
                <img src={saleImg01} alt="" />
              </div>
              <div className="md:w-[48%]">
                <div className="md:pb-9 pb-3">
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