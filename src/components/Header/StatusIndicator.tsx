import React from 'react';
import clsx from 'clsx';

interface StatusIndicatorProps {
  status: 'offline' | 'poor' | 'good' | 'best';
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  const statusClasses = clsx({
    'bg-red-500': status === 'offline',
    'bg-yellow-500': status === 'poor',
    'bg-green-500': status === 'good',
    'bg-blue-500': status === 'best',
  });

  return (
    <div className="flex items-center space-x-2">
      <div className={`rounded-full h-4 w-4 ${statusClasses}`} title={status} />
      <span className="text-white capitalize">{status}</span>
    </div>
  );
};

export default StatusIndicator;
