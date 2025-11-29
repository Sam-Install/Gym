import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TiThMenu } from 'react-icons/ti'
import { IoCartOutline } from 'react-icons/io5'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { cartItems } = useCart()
  const cartCount = cartItems.length

  const toggleMobile = () => setMobileOpen(prev => !prev)
  const toggleServices = () => setServicesOpen(prev => !prev)
  const closeAll = () => {
    setMobileOpen(false)
    setServicesOpen(false)
  }

  return (
    <div className="relative z-50 flex items-center justify-between py-5 px-4">
      <h1 className='text-black'>
        BigMan<span className='text-red-500'>Gym</span>
      </h1>

      {/* Desktop nav */}
      <ul className='hidden sm:flex text-black gap-4 items-center'>
        <NavLink to='/' onClick={closeAll}><p>Home</p></NavLink>
        <NavLink to='/about' onClick={closeAll}><p>About Us</p></NavLink>

        {/* Services dropdown */}
        <div className='relative'>
          <button onClick={toggleServices} className='flex items-center'>
            <span>Services ▾</span>
          </button>
          {servicesOpen && (
            <div className='absolute top-full left-0 bg-white border border-gray-200 rounded shadow-md z-50'>
              <NavLink to='/services/nutrition' className='block px-4 py-2 text-black hover:bg-gray-100' onClick={closeAll}>
                Nutrition
              </NavLink>
              <NavLink to='/services/orthopedic' className='block px-4 py-2 text-black hover:bg-gray-100' onClick={closeAll}>
                Orthopedic
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to='/member' onClick={closeAll}><p>Membership</p></NavLink>
        <NavLink to='/gallery' onClick={closeAll}><p>Gallery</p></NavLink>
        <NavLink to='/store' onClick={closeAll}><p>Store</p></NavLink>
      </ul>

      {/* Right side: cart + admin + hamburger */}
      <div className='flex items-center gap-4'>
        {/* Cart icon + badge */}
        <Link to='/cart' className='relative'>
          <IoCartOutline className='text-2xl' />
          {cartCount > 0 && (
            <span className='absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
              {cartCount}
            </span>
          )}
        </Link>

        <Link to='/login'>
          <button className='text-sm bg-orange-400 text-black px-4 py-1 rounded'>Admin</button>
        </Link>

        <button className='sm:hidden text-2xl' onClick={toggleMobile}>
          <TiThMenu />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className='sm:hidden absolute top-full left-0 w-full bg-white z-50 border-t border-gray-200'>
          <NavLink to='/' className='block px-4 py-2' onClick={closeAll}>Home</NavLink>
          <NavLink to='/about' className='block px-4 py-2' onClick={closeAll}>About Us</NavLink>
        
          <div className='border-t border-gray-200'>
            <button onClick={toggleServices} className='w-full text-left px-4 py-2 flex justify-between items-center'>
              <span>Services</span>
              <span>{servicesOpen ? '▾' : '▸'}</span>
            </button>
            {servicesOpen && (
              <div className='pl-4'>
                <NavLink to='/services/nutrition' className='block px-4 py-2' onClick={closeAll}>Nutrition</NavLink>
                <NavLink to='/services/orthopedic' className='block px-4 py-2' onClick={closeAll}>Orthopedic</NavLink>
              </div>
            )}
          </div>
          <NavLink to='/member' className='block px-4 py-2' onClick={closeAll}>Membership</NavLink>
          <NavLink to='/gallery' className='block px-4 py-2' onClick={closeAll}>Gallery</NavLink>
          <NavLink to='/store' className='block px-4 py-2' onClick={closeAll}>Store</NavLink>
        </div>
      )}
    </div>
  )
}

export default Navbar
