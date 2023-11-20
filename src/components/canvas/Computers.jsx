import { Suspense, useEffect, useState } from 'react';
import { Canvas, events } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../loader';
import { useSpring, a } from '@react-spring/three';


const Computers = ({ isMobile }) => {
  const computer = useGLTF('../desktop_pc/qDeskDisplay.glb');
  const spring = useSpring({
    from: { y: 0 },
    to: { y: 0.15 },
    config: { tension: 15, friction: 0 },
    loop: { reverse: true },
  });
  return (
    <a.mesh position-y={spring.y}>
      <hemisphereLight intensity={1.55} groundColor="black" />
      <pointLight intensity={140} />
      <spotLight 
        position={[10,4, 5]}
        angle={0.12}
        penumbra={1}
        intensity={10}
      />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 1 : 2}
      position={isMobile ? [0, -1.5, -1] : [3, -3, -2]}
      rotation={[0, 1.6, 0]}
      />
    </a.mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 640); 
    };
    // Initial check when the component mounts
    updateIsMobile();

    window.addEventListener('resize', updateIsMobile);

    return () => {

      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);
  
  return (
    <Canvas className='z-10' frameloop="demand" shadows camera={{position: [20,3,5], fov: 25 }} gl={{ preserveDrawingBuffer:true }}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas