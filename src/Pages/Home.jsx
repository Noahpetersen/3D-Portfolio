import React, { useEffect, useRef, useState } from 'react'
import Experience from '../components/Experience'
import HomeInfo from '../components/HomeInfo'

import sakura from '../assets/sakura.mp3'
import { a } from '@react-spring/three'
import { is } from '@react-spring/shared'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.2
  audioRef.current.loop = true
  const [currentStage, setCurrentStage] = useState()
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  } , [isPlayingMusic])

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Experience currentStage={currentStage} setCurrentStage={setCurrentStage} />
      <div className='absolute bottom-2 left-2 '>
        <img 
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home