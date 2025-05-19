"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, Float, Text3D, OrbitControls } from "@react-three/drei"

export default function ShowcaseThreeDScene({ title, color }: { title: string; color: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.8}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {title}
          <meshStandardMaterial color={color} />
        </Text3D>
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      <Environment preset="city" />
    </Canvas>
  )
}
