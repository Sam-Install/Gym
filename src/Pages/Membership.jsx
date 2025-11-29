import React, { useState } from 'react'

const Membership = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    dob: '',
    phone: '',
    gender: 'male',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Membership form data:', formData)
    // here you can send data to server or API
  }

  return (
    <div className="mt-8 md:mt-16 lg:mt-24 px-4">
      <h1 className="text-2xl text-black font-bold text-center">
        Join us and Start Your Transformation Journey With Us
      </h1>
      <p className="text-center text-lg mt-4">Fill The Form Below</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6 bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter first name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="secondName" className="block text-gray-700">Second Name</label>
          <input
            type="text"
            name="secondName"
            value={formData.secondName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter last name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="e.g. 0763 123 456"
            required
          />
        </div>
        <div className="mb-4">
          <span className="block text-gray-700 mb-1">Gender</span>
          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />{' '}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />{' '}
            Female
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Any message or special request..."
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-400 text-white py-2 rounded hover:bg-red-400"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Membership
