import React from 'react'
import bts from '../assets/abouts.jpeg'

const AboutUs = () => {
  return (
    <div className='mt-8 md:mt-16 lg:mt-24 px-4'>


        <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>

            <div className='w-full sm:w-1/2'>

            <img src={bts} alt="mombasagym" className='w-full h-full object-cover' />

            </div>


            <div className='w-full sm:w-1/2'>

            <h1 className='text-orange-500 text-center text-2xl'>About Us</h1>
           <p className="mt-6 text-base text-center">
  At BigMan Gym, we believe fitness is for everyone — no matter your age, fitness level, or background. From the moment you walk in, you’ll find a welcoming atmosphere, modern equipment, and trainers committed to helping you reach your goals safely and effectively. Whether you want to build strength, lose weight, boost endurance, or just stay healthy, our gym offers a wide range of classes and personalised training programs designed to meet your needs. We cater to men, women, and kids, offering an inclusive community where everyone feels supported and motivated. We operate daily from 8:00 AM to 10:00 PM, giving you the flexibility to train when it’s convenient. Clean facilities, flexible schedule, and a friendly, encouraging vibe make BigMan Gym more than just a workout space — it’s a fitness home where transformation begins. Come join us and start your journey towards a stronger, healthier you.

</p>

            </div>

        </div>

    </div>
  )
}

export default AboutUs