import React from 'react';
import { Play, Square, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TestButtonProps {
  isRunning: boolean;
  onClick: () => void;
}

const TestButton: React.FC<TestButtonProps> = ({ isRunning, onClick }) => {
  const { t } = useLanguage();

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={onClick}
        disabled={isRunning}
        className={`
          relative w-40 h-40 rounded-full font-orbitron font-bold text-lg
          glass-effect transition-all duration-300 overflow-hidden
          border-2 text-white
          ${isRunning 
            ? 'border-primary-orange bg-primary-orange/10 shadow-orange-glow-lg' 
            : 'border-primary-orange/50 hover:border-primary-orange hover:shadow-orange-glow hover:bg-primary-orange/5'
          }
        `}
      >
        {/* Button content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {isRunning ? (
            <>
              <Square className="w-8 h-8 mb-2 text-primary-orange" fill="currentColor" />
              <span className="text-sm uppercase tracking-wider text-primary-orange">{t.stop}</span>
              <span className="text-xs text-text-muted mt-1">{t.testing}</span>
            </>
          ) : (
            <>
              <div className="relative">
                <Play className="w-8 h-8 mb-2 text-primary-orange" fill="currentColor" />
                <Zap className="absolute -top-1 -right-1 w-4 h-4 text-primary-orange opacity-60" />
              </div>
              <span className="text-sm uppercase tracking-wider text-white">{t.start}</span>
              <span className="text-xs text-text-muted mt-1">{t.speedTest}</span>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default TestButton;