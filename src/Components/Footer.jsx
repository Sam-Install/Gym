import React from 'react'

const Footer = () => {
  return (
    <div className='mt-8 md:mt-16 lg:mt-24'>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 ">
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
          <div className="md:max-w-96">
            <h1 className='text-black text-2xl'>
              BigMan<span className='text-red-400 text-2xl'>Gym</span>
            </h1>
            <p className="mt-6 text-sm">
              At BigMan Gym, we’re all about helping you reach your fitness goals — whatever they are. Whether you’re aiming to build strength, gain healthy muscle, stay fit, or improve your overall wellness, we’ve got you covered. Our gym welcomes men, women, and kids, offering a variety of workouts, personalized training, and expert guidance to match every age and fitness level. We believe fitness should be inclusive, supportive, and empowering. With flexible hours and a committed team, we make sure you get the attention and support you deserve. Join us at BigMan Gym and start your journey to a stronger, healthier life today.
            </p>
          </div>

          <div className="flex-1 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            {/* Company menu */}
            <div className="text-center md:text-left">
              <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
              <ul className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start items-center gap-2 text-sm">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li className="relative">
                  <span className="cursor-pointer">Services</span>
                  <ul className="ml-0 sm:ml-4 mt-1 space-y-1 bg-white text-gray-700 p-2 rounded shadow-md">
                    <li><a href="/services/nutrition">Nutrition</a></li>
                    <li><a href="/services/orthopedic">Orthopedic</a></li>
                  </ul>
                </li>
                <li><a href="/member">Membership</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/store">Store</a></li>
              </ul>
            </div>

            {/* Contact info */}
            <div className="text-center md:text-left">
              <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
              <div className="text-sm space-y-2">
                <p>07355345378</p>
                <p>bigMangym@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <p className="pt-4 text-center text-xs md:text-sm pb-5">
          Copyright 2025 © All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
