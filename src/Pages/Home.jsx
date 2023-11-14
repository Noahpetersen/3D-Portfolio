import React, { useState } from 'react'
import Experience from '../components/Experience'
import HomeInfo from '../components/HomeInfo'

const Home = () => {
  const [currentStage, setCurrentStage] = useState()

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        Popup
      </div>
      <Experience currentStage={currentStage} setCurrentStage={setCurrentStage} />
    </section>
  )
}

export default Home