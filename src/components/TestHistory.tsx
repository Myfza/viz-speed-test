import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Download, Upload, Wifi, Trash2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TestResult {
  id: string;
  timestamp: Date;
  download: number;
  upload: number;
  ping: number;
  server: string;
}

interface TestHistoryProps {
  results: TestResult[];
  onClearHistory?: () => void;
}

const TestHistory: React.FC<TestHistoryProps> = ({ results, onClearHistory }) => {
  const { t } = useLanguage();

  if (results.length === 0) {
    return (
      <div className="glass-effect rounded-lg p-8 text-center">
        <Clock className="w-16 h-16 mx-auto mb-4 text-primary-orange opacity-50" />
        <h3 className="font-orbitron text-xl mb-2 text-white">{t.noTestHistory}</h3>
        <p className="text-text-muted text-sm">
          {t.noTestHistoryDesc}
        </p>
      </div>
    );
  }

  return (
    <div className="glass-effect rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-orbitron text-xl text-white orange-glow-text">
          {t.testHistory}
        </h3>
        {onClearHistory && (
          <motion.button
            onClick={onClearHistory}
            className="p-2 text-text-muted hover:text-primary-orange transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Trash2 className="w-4 h-4" />
          </motion.button>
        )}
      </div>
      
      <div className="space-y-4 max-h-80 overflow-y-auto">
        {results.map((result, index) => (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect-orange rounded-lg p-4 hover:bg-primary-orange/20 transition-all duration-300 cursor-pointer border border-primary-orange/20 hover:border-primary-orange/40"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="text-xs text-text-muted">
                {result.timestamp.toLocaleDateString()} • {result.timestamp.toLocaleTimeString()}
              </div>
              <div className="text-xs text-primary-orange font-medium">
                {result.server}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Download className="w-5 h-5 text-primary-orange mb-2" />
                <div className="text-lg font-bold text-white">
                  {result.download.toFixed(1)}
                </div>
                <div className="text-xs text-text-muted uppercase">{t.mbpsDownload}</div>
              </div>
              
              <div className="flex flex-col items-center">
                <Upload className="w-5 h-5 text-primary-orange mb-2" />
                <div className="text-lg font-bold text-white">
                  {result.upload.toFixed(1)}
                </div>
                <div className="text-xs text-text-muted uppercase">{t.mbpsUpload}</div>
              </div>
              
              <div className="flex flex-col items-center">
                <Wifi className="w-5 h-5 text-primary-orange mb-2" />
                <div className="text-lg font-bold text-white">
                  {result.ping}
                </div>
                <div className="text-xs text-text-muted uppercase">{t.msPing}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestHistory;