import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

function FolderMesh({ position, color, flagship, label, onOpen }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [opening, setOpening] = useState(false)

  useFrame((state, delta) => {
    if (!meshRef.current) return

    meshRef.current.rotation.y += delta * 0.3
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.05

    if (opening) {
      meshRef.current.scale.x = meshRef.current.scale.y = meshRef.current.scale.z +=
        delta * 4
      if (meshRef.current.scale.x > 1.6) {
        setOpening(false)
        onOpen?.()
      }
    } else if (hovered) {
      meshRef.current.scale.setScalar(1.15)
    } else {
      meshRef.current.scale.setScalar(1)
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setOpening(true)}
    >
      <boxGeometry args={[0.6, 0.5, 0.15]} />
      <meshStandardMaterial
        color={color}
        emissive={flagship ? color : '#000000'}
        emissiveIntensity={flagship ? 0.4 : 0}
      />
      <Html center position={[0, -0.55, 0]} distanceFactor={8} occlude>
        <span className="folder-3d-label">{label}</span>
      </Html>
    </mesh>
  )
}

export default FolderMesh