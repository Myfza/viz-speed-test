import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, MapPin, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ServerOption {
  id: string;
  name: string;
  location: string;
  ping: number;
  flag: string;
}

interface ServerSelectionProps {
  servers: ServerOption[];
  selectedServer: string;
  onServerChange: (serverId: string) => void;
}

const ServerSelection: React.FC<ServerSelectionProps> = ({ 
  servers, 
  selectedServer, 
  onServerChange 
}) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const currentServer = servers.find(s => s.id === selectedServer);

  const getPingColor = (ping: number) => {
    if (ping < 50) return '#ff6600';
    if (ping < 100) return '#ff8533';
    return '#cc5200';
  };

  const getPingStatus = (ping: number) => {
    if (ping < 50) return t.excellent;
    if (ping < 100) return t.good;
    return t.fair;
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-effect rounded-lg p-4 w-full text-left hover-orange-glow transition-all duration-300 border border-primary-orange/20 hover:border-primary-orange/40"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Server className="w-6 h-6 text-primary-orange" />
            <div>
              <div className="font-medium text-white text-lg">
                {currentServer?.name}
              </div>
              <div className="text-sm text-text-muted flex items-center mt-1">
                <MapPin className="w-3 h-3 mr-1" />
                {currentServer?.location}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div 
                className="text-sm font-medium"
                style={{ color: getPingColor(currentServer?.ping || 0) }}
              >
                {currentServer?.ping}ms
              </div>
              <div className="text-xs text-text-muted">
                {getPingStatus(currentServer?.ping || 0)}
              </div>
            </div>
            <div 
              className="w-3 h-3 rounded-full"
              style={{ 
                backgroundColor: getPingColor(currentServer?.ping || 0),
                boxShadow: `0 0 8px ${getPingColor(currentServer?.ping || 0)}`
              }}
            />
            <ChevronDown 
              className={`w-5 h-5 text-primary-orange transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`} 
            />
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 glass-effect rounded-lg border border-primary-orange/30 max-h-80 overflow-y-auto z-50"
            >
              {servers.map((server) => (
                <motion.button
                  key={server.id}
                  onClick={() => {
                    onServerChange(server.id);
                    setIsOpen(false);
                  }}
                  className={`w-full p-4 text-left hover:bg-primary-orange/10 transition-colors duration-200 border-b border-primary-orange/10 last:border-b-0 ${
                    server.id === selectedServer ? 'bg-primary-orange/20' : ''
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{server.flag}</span>
                      <div>
                        <div className="font-medium text-white">
                          {server.name}
                        </div>
                        <div className="text-sm text-text-muted flex items-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          {server.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div 
                          className="text-sm font-medium"
                          style={{ color: getPingColor(server.ping) }}
                        >
                          {server.ping}ms
                        </div>
                        <div className="text-xs text-text-muted">
                          {getPingStatus(server.ping)}
                        </div>
                      </div>
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ 
                          backgroundColor: getPingColor(server.ping),
                          boxShadow: `0 0 8px ${getPingColor(server.ping)}`
                        }}
                      />
                      {server.id === selectedServer && (
                        <div className="w-2 h-2 bg-primary-orange rounded-full" />
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServerSelection;