'use client';


import React, { useState, useEffect } from 'react';
import Header from '../Header';

const getNetworkStatus = (): 'offline' | 'poor' | 'good' | 'best' => {
  if (typeof window !== 'undefined') {
    // @ts-ignore
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (!navigator.onLine) return 'offline';
    
    if (connection) {
      if (connection.downlink < 0.5) return 'poor';
      if (connection.downlink < 2) return 'good';
      return 'best';
    }
    
    return 'good'; // Fallback
  }
  
  return 'offline'; // Fallback for non-browser environments
};

const NetworkStatus: React.FC = () => {
  const [status, setStatus] = useState<'offline' | 'poor' | 'good' | 'best'>(getNetworkStatus());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleChange = () => {
      setStatus(getNetworkStatus());
    };

    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);

    // @ts-ignore
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      connection.addEventListener('change', handleChange);
    }

    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
      if (connection) {
        connection.removeEventListener('change', handleChange);
      }
    };
  }, []);

  return <Header status={status} />;
};

export default NetworkStatus;
