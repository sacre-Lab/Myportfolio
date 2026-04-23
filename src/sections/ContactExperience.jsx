import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import { Computer } from '../components/Computer-optimized';




const ContactExperience = () => {
  return (
   
        <Canvas style={{ height: '100%', width: '100%' }} camera={{ position: [0, 3, 7], fov: 45 }} shadows>
          <ambientLight intensity={0.5} color='#fff4e6'/>
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <spotLight 
          position={[-5, -5, 5]} 
          angle={0.15}
          penumbra={1}
          intensity={0.6}
          castShadow
        />

        {/* Using local HDR to avoid flaky preset fetch */}
        <Environment files="/textures/potsdamer_platz_1k.hdr" background />

        <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI /2}
        />

        <Suspense fallback={null}>
          <group scale={0.03} position={[0, -1.5, -2]}>
            <Computer />
          </group>
        </Suspense>

        <group scale={[1,1,1]}>
            <mesh receiveShadow position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0,0]}>
                <planeGeometry args={[30,30]} />
                <meshStandardMaterial color='#a46b2b' />
            </mesh>
        </group>
         
        </Canvas>
    
  )
}

export default ContactExperience
