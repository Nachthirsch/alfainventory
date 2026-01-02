import React from 'react';
import { Search } from 'lucide-react';

/**
 * Reusable Input component
 */
const Input = ({
  label,
  error,
  helpText,
  className = '',
  inputClassName = '',
  type = 'text',
  icon: Icon,
  ...props
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="w-4 h-4 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors ${Icon ? 'pl-10' : ''} ${error ? 'border-red-500' : 'border-gray-300'} ${inputClassName}`}
          {...props}
        />
      </div>
      {error && <p className="text-red-600 text-xs">{error}</p>}
      {helpText && !error && <p className="text-gray-500 text-xs">{helpText}</p>}
    </div>
  );
};

/**
 * Search Input component
 */
export const SearchInput = ({ placeholder = 'Search...', className = '', ...props }) => (
  <Input
    icon={Search}
    placeholder={placeholder}
    className={className}
    {...props}
  />
);

export default Input;
