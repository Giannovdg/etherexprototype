"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, Float, OrbitControls } from "@react-three/drei"

export default function ThreeDScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          <meshStandardMaterial color="#ffffff" metalness={0.7} roughness={0.1} envMapIntensity={1} />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <Environment preset="city" />
    </Canvas>
  )
}
