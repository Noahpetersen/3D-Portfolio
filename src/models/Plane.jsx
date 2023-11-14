import React, { useEffect, useRef } from 'react'

import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({ isRotating, ...props }) => {
    const plane = useRef()
    const { scene, animations } = useGLTF(planeScene)
    const { actions } = useAnimations(animations, plane)

    useEffect(() => {
        actions['Take 001'].play()
      
    }, [isRotating, actions])


  return (
    <mesh {...props} ref={plane}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane