import React, { Suspense, useEffect } from "react";
import { Float } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { MeshStandardMaterial } from "three";
import * as THREE from "three";


const TechIcon = ({ model }) => {
    const gltf = useLoader(GLTFLoader, model.modelPath, (loader) => {
        const dracoLoader = new DRACOLoader();
        // use Google's public CDN for the Draco decoders
        dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
        loader.setDRACOLoader(dracoLoader);
    });

    useEffect(() => {
       
        if (model.name === 'Interactive Developer') {
            gltf.scene.traverse((child) => {
                if (child.isMesh && child.name === 'object_5') {
                    child.material = new THREE.MeshStandardMaterial({ color: 'white' });
                }
            });
        }
    }, [gltf, model.name]);

    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
                {/* Environment preset removed due to flaky HDR fetch in dev. Using local lights instead. */}

                <Float speed={5.5} rotationIntensity={2} floatIntensity={0.9}>
                    <group scale={model.scale} rotation={model.rotation}>
                        <primitive object={gltf.scene} />
                    </group>
                </Float>
            </Suspense>
        </Canvas>
    )
}
export default TechIcon