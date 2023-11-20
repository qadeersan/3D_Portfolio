import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from '../loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1}>
      <ambientLight intensity={.15}/>
      <directionalLight position={[0,0,.5]}/>
      <mesh receiveShadow scale={1.75}>
        <capsuleGeometry args={[1, 1, 4, 50]} />
        <meshStandardMaterial 
          color="#4169E1"
          // polygonOffset
          // polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0,0,1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          scale={[1.5,1.5,1.5]}
          map={decal}
        />
        
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return(
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer:true }}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas