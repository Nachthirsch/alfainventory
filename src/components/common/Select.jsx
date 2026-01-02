import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Reusable Select component
 */
const Select = ({
  label,
  error,
  helpText,
  options = [],
  placeholder = 'Select an option',
  className = '',
  selectClassName = '',
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
        <select
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white ${error ? 'border-red-500' : 'border-gray-300'} ${selectClassName}`}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      {error && <p className="text-red-600 text-xs">{error}</p>}
      {helpText && !error && <p className="text-gray-500 text-xs">{helpText}</p>}
    </div>
  );
};

export default Select;
