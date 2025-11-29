import React from 'react'
import d1 from '../assets/ded1.jpeg'
import d2 from '../assets/ded2.jpeg'
import { Link } from 'react-router-dom'

const Dedicated = () => {
  return (
    <div className='mt-8 md:mt-16 lg:mt-24'>

        <div className='flex flex-col sm:flex-row gap-4 text-center items-center justify-center'>

            <div className='w-full sm:w-1/2 '>

         

            <img src={d1} alt="mombasagym" className='rounded' />
            <img src={d2} alt="gymmombasa" className='rounded mt-2' />

       

            </div>


            <div className='w-full sm:w-1/2'>

  
               <h1 className='text-orange-600 text-2xl font-bold '>Dedicated Gym For Men, Women and Kids</h1>
               <p className='mt-2'>At BigMan Gym, our mission is to support **everyone** on their fitness journey — men, women, and children alike. Whether you're a dad looking to build strength, a mom aiming for balance and wellness, or a young athlete full of ambition, we welcome you. With expert trainers, safe and fun kid-friendly areas, and tailored programs for all ages and fitness levels, our gym is more than just a workout spot — it's a community. We're dedicated to creating a nurturing environment where every member can grow stronger, healthier, and more confident.</p>

          <Link to='member'><button className='bg-orange-500 text-sm px-6 py-2 rounded mt-2 text-white'>Join Us</button>
</Link>   

            </div>

        </div>

    </div>
  )
}

export default Dedicated