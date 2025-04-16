"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Group } from 'three'

export function Model3D({ 
  modelPath = '/models/robot.glb', 
  scale = 1, 
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  autoRotate = true,
  autoRotateSpeed = 1
}) {
  const group = useRef<Group>(null)
  const { nodes, materials } = useGLTF(modelPath)

  useFrame((state, delta) => {
    if (autoRotate && group.current) {
      group.current.rotation.y += delta * autoRotateSpeed
    }
  })

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <primitive object={nodes.Scene} />
    </group>
  )
}

// Preload the model
useGLTF.preload('/models/robot.glb') 