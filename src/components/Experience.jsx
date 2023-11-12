import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import Loader from './Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'

const Experience = () => {
    const [isRotating, setIsRotating] = useState(false)

    const adjustIslandForScreenSize = () => {
        let screenScale = null
        let screenPosition = [0, -6.5, -43]
        let rotation = [0.1, 4.7, 0]

        if(window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        } else {
            screenScale = [1, 1, 1]
        }

        return [screenScale, screenPosition, rotation]
    }

    const [islandScale, islandPosition, islandRotation ] = adjustIslandForScreenSize()

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition 

        if(window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5]
            screenPosition = [0, -1.5, 0]
        } else {
            screenScale = [3, 3, 3]
            screenPosition = [0, -4, -4]
        }

        return [screenScale, screenPosition]
    }

    const [ planeScale, planePosition ] = adjustPlaneForScreenSize()

    

  return (
    <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}	
        camera={{ near: 0.1, far: 1000 }}
    >
        <Suspense fallback={<Loader/>}>
            <directionalLight 
                position={[ 1,1,1 ]} 
                intensity={2}
            />
            <ambientLight intensity={0.5}/>
            <hemisphereLight 
                skyColor="#b1e1ff"
                groundColor="#000000"
                intensity={1}
            />
            <Island 
                position={islandPosition}
                scale={islandScale}
                rotation={islandRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
            />
            <Plane 
                position={planePosition}
                scale={planeScale}
                rotation={[0, 20, 0]}
                isRotating={isRotating}
            />
            <Bird 
                position={[-5, 2, -1]}
                scale={[0.003, 0.003, 0.003]}
            />
            <Sky/>
        </Suspense>
    </Canvas>
  )
}

export default Experience