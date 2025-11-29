import React from 'react'
import Hero from '../Components/Hero'
import Abouts from '../Components/Abouts'
import Dedicated from '../Components/Dedicated'
import FeaturedClasses from '../Components/FeaturedClasses'
import Bmi from '../Components/Bmi'
import Locations from '../Components/Locations'
// Import Elfsight widget
import { ElfsightWidget } from 'react-elfsight-widget'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Abouts/>
      <Dedicated/>
      <FeaturedClasses/>
      <Bmi/>
      <Locations/>

    
<script src="https://elfsightcdn.com/platform.js" async></script>
<div class="elfsight-app-b326d7a9-5d20-44ab-bd3f-fc6d0e84c123" data-elfsight-app-lazy></div>
    </div>
  )
}

export default Home
