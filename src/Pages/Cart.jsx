import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useCart();

  // compute total price — convert price string to number
  const total = cartItems.reduce((sum, item) => {
    // item.price is a string like "ksh 4000"
    // we need to parse the number part
    // assume price always "ksh 4000" — we strip non‑digits
    const priceNumber = Number(item.price.replace(/[^0-9]/g, '')) || 0;
    return sum + priceNumber;
  }, 0);

  return (
    <div className='mt-8 px-4'>
      <h1 className='text-2xl font-bold text-center'>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className='text-center mt-4'>Your cart is empty</p>
      ) : (
        <>
          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {cartItems.map((item, idx) => (
              <div key={idx}
                   className='border p-4 flex flex-col items-center'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='h-40 w-full object-cover'
                />
                <h2 className='font-bold mt-2'>{item.title}</h2>
                <p>{item.price}</p>
              </div>
            ))}
          </div>

          <div className='mt-6 text-right'>
            <p className='text-lg font-semibold'>
              Total: Ksh {total}
            </p>
          </div>

          <div className='mt-4 text-center flex flex-col gap-2 sm:flex-row'>
            <Link to='/checkout'>
              <button className='bg-green-500 text-white px-6 py-1 rounded'>
                Proceed to Checkout
              </button>
            </Link>

            
                          <Link to='/store'><button
                            onClick={() => addToCart(prod)} 
                            className='bg-red-400 px-6 py-1 text-sm text-white rounded mt-2'
                          >
                            Back To Store
                          </button></Link>     
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
