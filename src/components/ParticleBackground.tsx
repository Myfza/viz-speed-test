import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: 'small' | 'medium' | 'large';
  speed: number;
  direction: number;
}

const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles with different sizes and properties
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      
      // Create 80 particles with varying properties
      for (let i = 0; i < 80; i++) {
        const sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: randomSize,
          speed: Math.random() * 2 + 0.5,
          direction: Math.random() * 360
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();
    
    // Regenerate particles on window resize
    const handleResize = () => generateParticles();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getParticleSize = (size: string) => {
    switch (size) {
      case 'small': return 'w-0.5 h-0.5';
      case 'medium': return 'w-1 h-1';
      case 'large': return 'w-1.5 h-1.5';
      default: return 'w-0.5 h-0.5';
    }
  };

  const getAnimationDuration = (size: string) => {
    switch (size) {
      case 'small': return 6;
      case 'medium': return 8;
      case 'large': return 10;
      default: return 6;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-black via-primary-black-medium to-primary-orange opacity-20" />
      
      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full bg-primary-orange opacity-60 ${getParticleSize(particle.size)}`}
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0
          }}
          animate={{
            x: [particle.x, particle.x + Math.cos(particle.direction) * 100, particle.x],
            y: [particle.y, particle.y + Math.sin(particle.direction) * 100, particle.y],
            opacity: [0, 0.6, 0.3, 0.6, 0]
          }}
          transition={{
            duration: getAnimationDuration(particle.size),
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
          style={{
            filter: 'blur(0.5px)',
            boxShadow: '0 0 4px #ff6600'
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 border border-primary-orange opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-12 h-12 border border-primary-orange opacity-20 transform rotate-45"
        animate={{ rotate: 405 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Scanning lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-orange to-transparent opacity-40"
        animate={{
          y: [0, window.innerHeight, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default ParticleBackground;