"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

export function RobotModel({ 
  scale = 1, 
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  autoRotate = true,
  autoRotateSpeed = 1
}) {
  const group = useRef<Group>(null)

  useFrame((state, delta) => {
    if (autoRotate && group.current) {
      group.current.rotation.y += delta * autoRotateSpeed
    }
  })

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      {/* Robot head */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#4a6cf7" />
      </mesh>
      
      {/* Robot eyes */}
      <mesh position={[0.15, 1.6, 0.25]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-0.15, 1.6, 0.25]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Robot body */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[0.7, 0.8, 0.4]} />
        <meshStandardMaterial color="#4a6cf7" />
      </mesh>
      
      {/* Robot arms */}
      <mesh position={[0.55, 1, 0]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color="#4a6cf7" />
      </mesh>
      <mesh position={[-0.55, 1, 0]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color="#4a6cf7" />
      </mesh>
      
      {/* Robot legs */}
      <mesh position={[0.2, 0.3, 0]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color="#4a6cf7" />
      </mesh>
      <mesh position={[-0.2, 0.3, 0]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color="#4a6cf7" />
      </mesh>
    </group>
  )
} 