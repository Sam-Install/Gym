import React from 'react'
import o1 from '../assets/ortho1.jpeg'
import o2 from '../assets/orthho2.jpeg'
import o3 from '../assets/ortho3.jpeg'
import o4 from '../assets/ortho4.jpeg'

const Orthopedic = () => {

    const orthos = [ 


        {

            img:o1,
            title:"Deep Tissue Massage",
            description:"This Heals The Worn Out Tissues and Quickens Recovery"
        },


        
        {

            img:o2,
            title:"Post Trauma Healing",
            description:"This restructures the broken or dislocated joints and Quickens Recovery"
        },


        
        {

            img:o3,
            title:"Cupping & Massage",
            description:"This scraps and get rid of bad blood and better flow Of Blood"
        },


        
        {

            img:o4,
            title:"Deep Yoga",
            description:"This betters and relaxes the clients mind"
        }



    ]

  return (
    <div className='mt-8 md:mt-16 lg:mt-24 px-4 '>


<h1 className='text-2xl  font-bold text-center'>Our Orthopedic Department</h1>

<p className='text-center mt-2'>We also offer orthopedic services , massages and therapy</p> 


<div className='grid grid-cols grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2'>

    {
         orthos.map((ortho, index)=>(

           
             <div key={index} className='bg-white shadow-md text-center rounded flex flex-col'>

              <img src={ortho.img} alt={ortho.title} className='w-full h-48 object-cover' />

              <div className='p-4'>

                <h1 className='text-center font-bold text-lg'>{ortho.title}</h1>
                <p className='text-center mt-2'>{ortho.description}</p>

                </div>

                </div>

         )) 
    }

</div>


    </div>
  )
}

export default Orthopedic