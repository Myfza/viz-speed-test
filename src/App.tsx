import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';
import ParticleBackground from './components/ParticleBackground';
import LanguageSelector from './components/LanguageSelector';
import SpeedGauge from './components/SpeedGauge';
import TestButton from './components/TestButton';
import TestHistory from './components/TestHistory';
import ServerSelection from './components/ServerSelection';
import { useSpeedTest } from './hooks/useSpeedTest';
import { Download, Upload, Wifi, Activity, Zap } from 'lucide-react';

interface TestResult {
  id: string;
  timestamp: Date;
  download: number;
  upload: number;
  ping: number;
  server: string;
}

const servers = [
  { id: '1', name: 'Jakarta Server', location: 'Jakarta, Indonesia', ping: 15, flag: '🇮🇩' },
  { id: '2', name: 'Singapore Server', location: 'Singapore', ping: 45, flag: '🇸🇬' },
  { id: '3', name: 'Tokyo Server', location: 'Tokyo, Japan', ping: 65, flag: '🇯🇵' },
  { id: '4', name: 'Sydney Server', location: 'Sydney, Australia', ping: 85, flag: '🇦🇺' },
  { id: '5', name: 'Mumbai Server', location: 'Mumbai, India', ping: 35, flag: '🇮🇳' },
  { id: '6', name: 'Seoul Server', location: 'Seoul, South Korea', ping: 55, flag: '🇰🇷' },
];

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  const { isRunning, phase, progress, currentSpeed, result, startTest, stopTest } = useSpeedTest();
  const [selectedServer, setSelectedServer] = useState(servers[0].id);
  const [testHistory, setTestHistory] = useState<TestResult[]>([]);

  const handleTestComplete = () => {
    if (result) {
      const newResult: TestResult = {
        id: Date.now().toString(),
        timestamp: new Date(),
        download: result.download,
        upload: result.upload,
        ping: result.ping,
        server: servers.find(s => s.id === selectedServer)?.name || 'Unknown'
      };
      setTestHistory(prev => [newResult, ...prev].slice(0, 10));
    }
  };

  const clearHistory = () => {
    setTestHistory([]);
  };

  useEffect(() => {
    if (phase === 'complete' && result) {
      handleTestComplete();
    }
  }, [phase, result]);

  const getPhaseText = () => {
    switch (phase) {
      case 'ping': return t.testingLatency;
      case 'download': return t.testingDownload;
      case 'upload': return t.testingUpload;
      case 'complete': return t.testComplete;
      default: return t.readyToTest;
    }
  };

  const getPhaseIcon = () => {
    switch (phase) {
      case 'ping': return <Wifi className="w-6 h-6 text-primary-orange" />;
      case 'download': return <Download className="w-6 h-6 text-primary-orange" />;
      case 'upload': return <Upload className="w-6 h-6 text-primary-orange" />;
      case 'complete': return <Zap className="w-6 h-6 text-primary-orange" />;
      default: return <Activity className="w-6 h-6 text-primary-orange" />;
    }
  };

  return (
    <div className="min-h-screen bg-primary-black relative overflow-hidden">
      <ParticleBackground />
      
      {/* Language selector in top-right */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageSelector />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12 pt-8"
        >
          <motion.h1 
            className="font-orbitron text-responsive-xl font-bold mb-4 sm:mb-6 text-white orange-glow-text"
            animate={{ 
              textShadow: [
                '0 0 10px #ff6600',
                '0 0 20px #ff6600, 0 0 30px #ff6600',
                '0 0 10px #ff6600'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t.title}
          </motion.h1>
          <p className="text-text-secondary text-base sm:text-lg mb-4 sm:mb-6 px-4">
            {t.subtitle}
          </p>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary-orange to-transparent mx-auto" />
        </motion.header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Server Selection & History */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-orbitron text-xl mb-4 text-white orange-glow-text">
                {t.serverSelection}
              </h2>
              <ServerSelection
                servers={servers}
                selectedServer={selectedServer}
                onServerChange={setSelectedServer}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TestHistory 
                results={testHistory} 
                onClearHistory={clearHistory}
              />
            </motion.div>
          </div>

          {/* Center Column - Main Test Interface */}
          <div className="lg:col-span-4 space-y-8">
            {/* Status Display */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="glass-effect rounded-lg p-6 mb-8 border border-primary-orange/20">
                <div className="flex items-center justify-center mb-4">
                  {getPhaseIcon()}
                  <div className="font-orbitron text-lg sm:text-xl ml-3 text-white orange-glow-text">
                    {getPhaseText()}
                  </div>
                </div>
                
                {isRunning && (
                  <div className="w-full bg-primary-black-medium rounded-full h-3 mb-4 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-primary-orange to-primary-orange-light h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                      style={{ boxShadow: '0 0 10px #ff6600' }}
                    />
                  </div>
                )}
                
                <div className="flex justify-center space-x-6 text-sm text-text-muted">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-primary-orange" />
                    <span className="hidden sm:inline">{t.realTimeAnalysis}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-4 h-4 text-primary-orange" />
                    <span className="hidden sm:inline">{t.secureConnection}</span>
                  </div>
                </div>
              </div>

              {/* Test Button */}
              <TestButton isRunning={isRunning} onClick={isRunning ? stopTest : startTest} />
            </motion.div>
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-effect rounded-lg p-6 border border-primary-orange/20"
            >
              <h2 className="font-orbitron text-xl mb-6 text-white orange-glow-text text-center">
                {t.speedResults}
              </h2>

              {/* Main Speed Gauge */}
              <div className="flex justify-center mb-8">
                <SpeedGauge
                  speed={phase === 'download' ? currentSpeed : (result?.download || 0)}
                  maxSpeed={200}
                  label="Download Speed"
                  unit="Mbps"
                  isActive={phase === 'download'}
                />
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass-effect-orange rounded-lg p-4 text-center border border-primary-orange/20">
                  <Upload className="w-6 h-6 text-primary-orange mx-auto mb-2" />
                  <div className="text-2xl font-orbitron font-bold text-white orange-glow-text">
                    {phase === 'upload' ? currentSpeed.toFixed(1) : (result?.upload.toFixed(1) || '0.0')}
                  </div>
                  <div className="text-sm text-text-muted uppercase tracking-wide">
                    {t.mbpsUpload}
                  </div>
                </div>

                <div className="glass-effect-orange rounded-lg p-4 text-center border border-primary-orange/20">
                  <Wifi className="w-6 h-6 text-primary-orange mx-auto mb-2" />
                  <div className="text-2xl font-orbitron font-bold text-white orange-glow-text">
                    {result?.ping || '--'}
                  </div>
                  <div className="text-sm text-text-muted uppercase tracking-wide">
                    {t.msPing}
                  </div>
                </div>
              </div>

              {/* Connection Info */}
              {result && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pt-6 border-t border-primary-orange/20"
                >
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-muted">{t.server}:</span>
                      <span className="text-white font-medium">
                        {servers.find(s => s.id === selectedServer)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">{t.location}:</span>
                      <span className="text-white font-medium">
                        {servers.find(s => s.id === selectedServer)?.location}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">{t.ipAddress}:</span>
                      <span className="text-white font-medium">192.168.1.1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">{t.isp}:</span>
                      <span className="text-white font-medium">Your Internet Provider</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;