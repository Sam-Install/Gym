import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Membership from './Pages/Membership'
import Services from './Pages/Services'
import Store from './Pages/Store'
import Gallery from './Pages/Gallery'
import Cart from './Pages/Cart'
import Nutrition from './Pages/Nutrition'
import Orthopedic from './Pages/Orthopedic'
import Checkout from './Pages/Checkout'

const App = () => {
  return (
    <CartProvider>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/member' element={<Membership />} />
          <Route path='/store' element={<Store />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/services/nutrition' element={<Nutrition />} />
          <Route path='/services/orthopedic' element={<Orthopedic />} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
