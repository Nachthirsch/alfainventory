import React from 'react';

/**
 * Reusable Card component
 */
const Card = ({
  children,
  className = '',
  padding = 'default',
  hover = false,
  ...props
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    default: 'p-4 md:p-6',
    lg: 'p-6 md:p-8',
  };

  const hoverStyles = hover ? 'hover:shadow-md transition-shadow duration-200' : '';

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 ${paddingStyles[padding]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card Header component
 */
export const CardHeader = ({ children, className = '' }) => (
  <div className={`border-b border-gray-200 pb-4 mb-4 ${className}`}>
    {children}
  </div>
);

/**
 * Card Title component
 */
export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
);

/**
 * Card Content component
 */
export const CardContent = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);

/**
 * Card Footer component
 */
export const CardFooter = ({ children, className = '' }) => (
  <div className={`border-t border-gray-200 pt-4 mt-4 ${className}`}>
    {children}
  </div>
);

export default Card;
