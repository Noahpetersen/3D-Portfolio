import React, { useEffect, useRef } from 'react'

import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Bird = ({...props}) => {
    const { scene, animations } = useGLTF(birdScene)
    const birdRef = useRef()
    const { actions } = useAnimations(animations, birdRef)

    useEffect(() => {
      actions['Take 001'].play()
    }, [actions])

    useFrame((state, delta) => {
      birdRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2

      if(birdRef.current.position.x > state.camera.position.x + 10) {
        birdRef.current.rotation.y = Math.PI
      } else if(birdRef.current.position.x < state.camera.position.x - 10) {
        birdRef.current.rotation.y = 0
      }

      if(birdRef.current.rotation.y === 0) {
        birdRef.current.position.x += 0.01
        birdRef.current.position.z -= 0.01
      } else {
        birdRef.current.position.x -= 0.01
        birdRef.current.position.z += 0.01
      
      }
    })

  return (
    <mesh {...props} ref={birdRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird