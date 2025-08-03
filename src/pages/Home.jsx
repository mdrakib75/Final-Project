import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Sale from '../Components/Sale'
import Arrivals from '../Components/Arrivals'
import Special from '../Components/Special'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <Banner/>
    <Sale/>
    <Arrivals/>
    <Special/>
    </>
  )
}

export default Home