import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Link } from "react-router-dom";
import { OrbitControls, Text, Center } from '@react-three/drei';
import heroImage from '../assets/images/imag1.jpg';
import './Hero.css';

function AnimatedSphere() {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.sin(time / 2);
    const scale = 1 + Math.sin(time * 2) * 0.2;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#007bff"
        roughness={0.3}
        metalness={0.8}
        wireframe={true}
      />
    </mesh>
  );
}

function FloatingText() {
  const textRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    textRef.current.position.y = Math.sin(time) * 0.2;
  });

  return (
    <group ref={textRef}>
      <Text
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
      </Text>
    </group>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-canvas">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ 
            background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} enablePan={false} />
            <AnimatedSphere />
            <Center position={[0, -2, 0]}>
              <FloatingText />
            </Center>
          </Suspense>
        </Canvas>
      </div>
      
      <div className="hero-content">
        <div className="hero-image-container">
          <img src={heroImage} alt="Profile" className="hero-image" />
        </div>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Deekshith Patel ll</span>
        </h1>
        <h2 className="hero-subtitle">Full Stack Developer</h2>
        <div className="hero-buttons">
        <Link to="/projects" className="hero-button primary">View Projects</Link>
        <Link to="/contact" className="hero-button secondary">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;