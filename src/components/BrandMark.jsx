import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

function VoodoModel() {
  const { scene } = useGLTF('/models/voodo.glb')
  const model = useMemo(() => scene.clone(true), [scene])

  return <primitive object={model} position={[0, -0.42, 0]} scale={1.08} />
}

function BrandMark() {
  return (
    <Canvas
      className="brand-model-canvas"
      camera={{ position: [0, 0, 2], fov: 34 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight color="#bedfff" intensity={1.5} />
      <directionalLight position={[1.5, 2, 3]} color="#d5f0ff" intensity={2} />
      <pointLight position={[-1.1, 0.3, 1.2]} color="#54caff" intensity={4} />
      <Suspense fallback={null}>
        <VoodoModel />
      </Suspense>
    </Canvas>
  )
}

export default BrandMark
