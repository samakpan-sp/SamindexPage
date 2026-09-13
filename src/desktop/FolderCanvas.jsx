import { Canvas } from '@react-three/fiber'
import FolderMesh from './FolderMesh'
import { icons } from './icons'

const folderIcons = icons.filter((icon) => icon.is3D)

function FolderCanvas({ onOpenFolder }) {
  return (
    <Canvas
      className="folder-canvas"
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 5]} intensity={0.8} />

      {folderIcons.map((icon, i) => (
        <FolderMesh
          key={icon.id}
          position={[i * 1.3 - (folderIcons.length - 1) * 0.65, 1.2, 0]}
          color={icon.flagship ? '#ffb454' : '#7c5cff'}
          flagship={icon.flagship}
          label={icon.label}
          onOpen={() => onOpenFolder?.(icon.id)}
        />
      ))}
    </Canvas>
  )
}

export default FolderCanvas