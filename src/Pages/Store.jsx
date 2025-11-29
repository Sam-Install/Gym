import React from 'react'
import st1 from '../assets/store1.jpeg'
import st2 from '../assets/store2.jpeg'
import { useCart } from '../context/CartContext'  
import { Link } from 'react-router-dom'

const Store = () => {
  const { addToCart } = useCart();  

  const products = [
    { img: st1, title: "QushMash", description: "Great for building mass and balance gaining weight", price: "ksh 4000" },
    { img: st2, title: "Perbolic", description: "One of the products that does magic in mass gaining", price: "ksh 6000" },
  ];

  return (
    <div className='mt-8 md:mt-16 lg:mt-24 px-4'>
      <h1 className='text-black text-center text-2xl'>Get some legit genuine boosters from us</h1>
      <p className='text-center mt-8'>Boost Your Mass and Body Growth with these boosters</p>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map((prod, index) => (
          <div key={index} className='bg-white text-sm text-center border shadow-md flex flex-col'>
            <img src={prod.img} alt={prod.title} className='w-full h-48 object-cover' />
            <div className='p-4 flex flex-col flex-grow'>
              <h1 className='text-lg text-black font-bold'>{prod.title}</h1>
              <p>{prod.description}</p>
              <p>{prod.price}</p>
       <Link to='/cart'><button
                onClick={() => addToCart(prod)} 
                className='bg-orange-400 px-6 py-1 text-sm text-white rounded mt-2'
              >
                Add To Cart
              </button></Link>      
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Store;
