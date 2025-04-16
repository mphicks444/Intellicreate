import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { RobotModel } from './RobotModel'

interface Scene3DProps {
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
  autoRotate?: boolean
  autoRotateSpeed?: number
  cameraPosition?: [number, number, number]
  className?: string
}

export function Scene3D({
  scale,
  position,
  rotation,
  autoRotate,
  autoRotateSpeed,
  cameraPosition = [0, 0, 5],
  className = 'h-[400px] w-full'
}: Scene3DProps) {
  return (
    <div className={className}>
      <Canvas>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <RobotModel
          scale={scale}
          position={position}
          rotation={rotation}
          autoRotate={autoRotate}
          autoRotateSpeed={autoRotateSpeed}
        />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
    </div>
  )
} 