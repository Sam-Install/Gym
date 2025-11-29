import React from 'react'
import one from '../assets/1.jpeg'
import two from '../assets/2.jpeg'
import three from '../assets/3.jpeg'
import o1 from '../assets/ortho1.jpeg'
import o2 from '../assets/orthho2.jpeg'
import st1 from '../assets/store1.jpeg'

const Gallery = () => {

const gallery = [


     {
        img:one,
     },


      {
        img:two,
     },


      {
        img:three,
     },


      {
        img:o1,
     },


      {
        img:o2,
     },


      {
        img:st1,
     },
]

  return (
    <div className='mt-8 md:mt-16 lg:mt-24 px-4 '>


        <h1 className='text-center text-2xl font-bold'>Our Gallery</h1>

          
          <div className='grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-4'>
             
              {
                 
                 gallery.map((gal,index)=> (


                      <div key={index} className='flex flex-col shadow-md bg-white text-center'>

                        <img src={gal.img} alt="" className='w-full h-48 object-cover' />


                        </div>
                 ))
              }
                
          </div>
           

    </div>
  )
}

export default Gallery