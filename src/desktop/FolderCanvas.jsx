import { Canvas } from '@react-three/fiber'
import FolderMesh from './FolderMesh'
import { icons } from './icons'

const folderIcons = icons.filter((icon) => icon.is3D)
const SPACING = 1.9 // widened from 1.3 to stop labels overlapping

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
          position={[i * SPACING - (folderIcons.length - 1) * (SPACING / 2), 1.2, 0]}
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