import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from './Loader'

const Experience = () => {
  return (
    <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
    >
        <Suspense fallback={<Loader/>}>

        </Suspense>
    </Canvas>
  )
}

export default Experience