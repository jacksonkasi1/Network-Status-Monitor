import React from 'react';
import StatusIndicator from './StatusIndicator';

interface HeaderProps {
  status: 'offline' | 'poor' | 'good' | 'best';
}

const Header: React.FC<HeaderProps> = ({ status }) => {
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Network Status</h1>
      <StatusIndicator status={status} />
    </header>
  );
};

export default Header;
