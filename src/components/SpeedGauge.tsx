import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface SpeedGaugeProps {
  speed: number;
  maxSpeed: number;
  label: string;
  unit: string;
  isActive?: boolean;
}

const SpeedGauge: React.FC<SpeedGaugeProps> = ({ 
  speed, 
  maxSpeed, 
  label, 
  unit, 
  isActive = false 
}) => {
  const { t } = useLanguage();
  const percentage = Math.min((speed / maxSpeed) * 100, 100);
  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-56 h-56 flex items-center justify-center">
      {/* Outer glow ring */}
      <div 
        className={`absolute inset-0 rounded-full transition-all duration-1000 ${
          isActive ? 'animate-orange-pulse' : ''
        }`}
        style={{ 
          boxShadow: isActive ? '0 0 40px #ff6600' : '0 0 20px #ff6600' 
        }} 
      />
      
      {/* SVG Gauge */}
      <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="6"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#ff6600"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ 
            filter: 'drop-shadow(0 0 8px #ff6600)',
            opacity: 0.9
          }}
        />
        
        {/* Inner accent circle */}
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="#ff6600"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="text-4xl font-orbitron font-bold text-white mb-2 orange-glow-text">
            {speed.toFixed(1)}
          </div>
          <div className="text-sm text-primary-orange uppercase tracking-wider font-medium">
            {unit}
          </div>
          {label === 'Download Speed' && (
            <div className="text-xs text-text-muted mt-1 uppercase tracking-wide">
              {t.downloadSpeed}
            </div>
          )}
          {label === 'Upload Speed' && (
            <div className="text-xs text-text-muted mt-1 uppercase tracking-wide">
              {t.uploadSpeed}
            </div>
          )}
          {label === 'Ping' && (
            <div className="text-xs text-text-muted mt-1 uppercase tracking-wide">
              {t.ping}
            </div>
          )}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-4 bg-primary-orange opacity-30"
            style={{
              top: '10px',
              left: '50%',
              transformOrigin: '50% 90px',
              transform: `translateX(-50%) rotate(${i * 45}deg)`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SpeedGauge;