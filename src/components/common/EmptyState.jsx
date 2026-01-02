import React from 'react';
import { Package } from 'lucide-react';
import Button from './Button';

/**
 * Empty State component for when there's no data
 */
const EmptyState = ({
  icon,
  title = 'Data tidak ditemukan',
  description = 'Mulai dengan membuat item pertama Anda.',
  actionLabel,
  onAction,
  className = '',
}) => {
  const IconComponent = icon || Package;
  
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4 ${className}`}>
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <IconComponent className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 text-center max-w-sm mb-4">{description}</p>
      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
