import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  let productId = useParams()
  let [singleData, setSingleData] = useState({});
  

  let getSingleData = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setSingleData(response.data)
    })
  }

  useEffect(() => {
    getSingleData()
  },[])

  console.log(singleData);
  
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails