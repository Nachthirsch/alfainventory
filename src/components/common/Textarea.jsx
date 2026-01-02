import React from 'react';

/**
 * Reusable Textarea component
 */
const Textarea = ({
  label,
  error,
  helpText,
  className = '',
  textareaClassName = '',
  rows = 4,
  ...props
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none ${error ? 'border-red-500' : 'border-gray-300'} ${textareaClassName}`}
        {...props}
      />
      {error && <p className="text-red-600 text-xs">{error}</p>}
      {helpText && !error && <p className="text-gray-500 text-xs">{helpText}</p>}
    </div>
  );
};

export default Textarea;
