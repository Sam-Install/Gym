import React from 'react'
import n1 from '../assets/nutritionist.jpg'
import n2 from '../assets/nutritionist2.jpg'

const Nutrition = () => {

    const teams = [


          {
             img:n1,
             title:"Ching Wanjiku",
             description:"With over a decade experience in the field Ching will help you with your nutritional needs and help you come up withe the perfect plan to ensure you mass up"
         },

            
          {
             img:n2,
             title:"Pablo Wanja",
             description:"With over a decade experience in the field Pablo will help you with your nutritional needs and help you follow up withe the perfect plan that our head nutritional gave you "
         },




    ];

  return (
    <div className='mt-8 md:mt-16 lg:mt-24'>

        <h1 className='text-center text-lg font-bold text-orange-500'>Services/Nutrition</h1>
        <h2 className='text-center mt-2 text-2xl'>Nutrition Matters</h2>
        <p className='text-center mt-2 text-gray-400'>We are not only focused in building your muscles up but we make sure we help you with nutritional advise to easen and better the process</p>
        <p className='text-center mt-2 text-gray-400'>Great nutrition goes a long way in helping and fastening the results of your hardwork in the gym hence we collaborated with the best nutritionist in town just to give the best to our clients</p>


        <h1 className='text-2xl text-center mt-2'>Our Team</h1>
          

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4'>

            
            {
                teams.map((item, index)=>(


                    <div key={index} className='text-center items-center bg-white shadow-md flex flex-col '>


                        <img src={item.img} alt={item.title} className='w-full h-120 object-cover' />

                        <div className='p-4'>
                            
                            <h1 className='tex-lg font-bold'>{item.title}</h1>
                            <p className='mt-2'>{item.description}</p>

                            </div>


                        </div>
                ))
            }



          </div>

    </div>
  )
}

export default Nutrition