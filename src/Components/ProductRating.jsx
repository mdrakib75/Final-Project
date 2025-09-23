import React from 'react'
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar, FaStar } from 'react-icons/fa6';

export const ProductRating = ({rating}) => {
    const fullRating = Math.floor(rating) || 0
    const halfRating = rating % 1 >= 0.5
    const emptyRating = 5 - fullRating - (halfRating ? 1 : 0)
    
  return (
    <>
    <div className='flex'>

         {
           [...Array(fullRating)].map((item)=> (
                 <FaStar key={item} className='text-[#FFD881]' />
            ))
        }


        {
          halfRating  &&  <FaStarHalfAlt className='text-[#FFD881]' />
        }


        {
              [...Array(emptyRating)].map((item)=> (
                 <FaRegStar key={item} className='text-[#FFD881]' />
            ))
        }
      

    </div>
    </>
    
  )
}
