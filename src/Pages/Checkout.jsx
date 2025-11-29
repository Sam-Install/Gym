
import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { cartItems } = useCart()
  const [phone, setPhone] = useState('')

  
  const total = cartItems.reduce((sum, item) => {
    const num = Number((item.price || '').replace(/[^0-9]/g, ''))
    return sum + (isNaN(num) ? 0 : num)
  }, 0)

  const handlePay = (e) => {
    e.preventDefault()
    if (!phone) {
      alert('Please enter your phone number')
      return
    }
    // TEMP: show prompt, you’ll connect backend later
    alert(`You are about to pay Ksh ${total} with M‑Pesa number: ${phone}`)
    // Ideally: send data to backend to initiate STK Push
  }

  return (
    <div className="mt-8 px-4">
      <h1 className="text-2xl font-bold text-center">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {cartItems.map((item, i) => (
            <div key={i} className="flex items-center border p-4 rounded">
              <img src={item.img} alt={item.title} className="w-20 h-20 object-cover mr-4"/>
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>{item.price}</p>
              </div>
            </div>
          ))}

          <div className="mt-4 text-right">
            <span className="font-bold">Total: Ksh {total}</span>
          </div>

          <hr className="my-6 border-gray-300"/>

          <form onSubmit={handlePay} className="max-w-sm mx-auto space-y-4">
            <h2 className="text-lg font-semibold">Pay with M‑Pesa</h2>
            <input
              type="tel"
              placeholder="Enter your phone (07…)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <button
              className="w-full bg-green-500 text-white px-4 py-2 rounded"
              type="submit"
            >
              Pay Ksh {total} with M‑Pesa
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Checkout
