import React from 'react';

/**
 * Loading Spinner component
 */
const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizes[size]} border-2 border-gray-200 border-t-blue-600 rounded-full animate-spin`}
      />
    </div>
  );
};

/**
 * Full page loading component
 */
export const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <LoadingSpinner size="lg" />
  </div>
);

/**
 * Skeleton loader component
 */
export const Skeleton = ({ className = '', variant = 'rect' }) => {
  const variants = {
    rect: 'rounded',
    circle: 'rounded-full',
    text: 'rounded h-4',
  };

  return (
    <div
      className={`bg-gray-200 animate-pulse ${variants[variant]} ${className}`}
    />
  );
};

export default LoadingSpinner;
