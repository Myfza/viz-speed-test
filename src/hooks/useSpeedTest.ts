import { useState, useCallback } from 'react';

interface SpeedTestResult {
  download: number;
  upload: number;
  ping: number;
}

interface SpeedTestState {
  isRunning: boolean;
  phase: 'idle' | 'ping' | 'download' | 'upload' | 'complete';
  progress: number;
  currentSpeed: number;
  result: SpeedTestResult | null;
}

export const useSpeedTest = () => {
  const [state, setState] = useState<SpeedTestState>({
    isRunning: false,
    phase: 'idle',
    progress: 0,
    currentSpeed: 0,
    result: null
  });

  const startTest = useCallback(async () => {
    setState(prev => ({ ...prev, isRunning: true, phase: 'ping', progress: 0, result: null }));

    // Simulate ping test
    setState(prev => ({ ...prev, phase: 'ping' }));
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate download test
    setState(prev => ({ ...prev, phase: 'download', progress: 0, currentSpeed: 0 }));
    for (let i = 0; i <= 100; i += 2) {
      await new Promise(resolve => setTimeout(resolve, 50));
      const speed = Math.random() * 100 + 50; // Simulate variable speed
      setState(prev => ({ 
        ...prev, 
        progress: i, 
        currentSpeed: speed 
      }));
    }

    // Simulate upload test
    setState(prev => ({ ...prev, phase: 'upload', progress: 0, currentSpeed: 0 }));
    for (let i = 0; i <= 100; i += 2) {
      await new Promise(resolve => setTimeout(resolve, 50));
      const speed = Math.random() * 50 + 25; // Upload typically slower
      setState(prev => ({ 
        ...prev, 
        progress: i, 
        currentSpeed: speed 
      }));
    }

    // Complete test
    const result: SpeedTestResult = {
      download: Math.random() * 100 + 50,
      upload: Math.random() * 50 + 25,
      ping: Math.floor(Math.random() * 50) + 10
    };

    setState(prev => ({ 
      ...prev, 
      phase: 'complete', 
      progress: 100, 
      currentSpeed: 0,
      result,
      isRunning: false 
    }));
  }, []);

  const stopTest = useCallback(() => {
    setState({
      isRunning: false,
      phase: 'idle',
      progress: 0,
      currentSpeed: 0,
      result: null
    });
  }, []);

  return {
    ...state,
    startTest,
    stopTest
  };
};