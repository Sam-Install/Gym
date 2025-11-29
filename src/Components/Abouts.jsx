import React from 'react'
import ab from '../assets/abouts.jpeg'

const Abouts = () => {
  return (
    <div className='mt-8 md:mt-16 lg:mt-24 '>

        <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>

            <div className='w-full sm:w-1/2'>

            <h1 className='text-center  text-orange-400'>Why Us</h1>
            <p>BigMan Gym is a dynamic fitness hub that empowers individuals to transform their bodies and lives. With state-of-the-art equipment, expert trainers, and a supportive community, we help you build strength, boost endurance, and recover right. Our tailored programs cater to everyone — from beginners to seasoned athletes — ensuring a workout plan that grows with you. At BigMan Gym, we believe in holistic health: alongside physical training, we emphasize nutrition and rest to achieve sustainable results. Join us, and let’s sculpt your dream physique together.</p>


            </div>

            <div className='w-full sm:w-1/2'>

            <img src={ab} alt="mombasa-gym" className='w-120 h-full object-cover rounded' />

            </div>

        </div>

    </div>
  )
}

export default Abouts