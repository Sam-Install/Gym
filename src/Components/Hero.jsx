import React, { useState, useEffect } from 'react'
import one from '../assets/1.jpeg'
import two from '../assets/2.jpeg'
import three from '../assets/3.jpeg'
import { Link } from 'react-router-dom'

const Hero = () => {
  const images = [one, two, three]
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden h-[500px]">
  
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="flex-shrink-0 w-full h-full relative">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
        <h1 className="text-orange-600 text-3xl font-bold drop-shadow-lg">
          Need To Get That Healthy Look, Shredded Body & Great Physique?
        </h1>
        <p className="text-white font-semibold mt-2 drop-shadow-md">
          BigManGym will deliver your dream body, health and recovery back more than you ever thought.
        </p>
        <p className="text-white mt-1 drop-shadow-md">
          Give us a visit or call us and let’s start working on your dream body.
        </p>

        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2'>

           <Link to='about'><button className='bg-red-500 text-sm text-white px-6 py-2 rounded'>Learn More</button></Link> 
           <Link><button className='bg-green-500 text-sm text-white px-6 py-2 rounded'>Text Us</button> </Link> 

        </div>
      </div>

   
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-20"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-20"
      >
        ›
      </button>
    </div>
  )
}

export default Hero
