// Utility functions for formatting

/**
 * Format number to Indonesian Rupiah currency
 * @param {number} value - The number to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value).replace('IDR', 'Rp');
};

/**
 * Format number with thousand separators
 * @param {number} value - The number to format
 * @returns {string} Formatted number string
 */
export const formatNumber = (value) => {
  return new Intl.NumberFormat('id-ID').format(value);
};

/**
 * Format date to Indonesian locale
 * @param {Date|string} date - The date to format
 * @param {boolean} includeTime - Whether to include time
 * @returns {string} Formatted date string
 */
export const formatDate = (date, includeTime = false) => {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  if (includeTime) {
    options.hour = '2-digit';
    options.minute = '2-digit';
  }

  return new Date(date).toLocaleDateString('id-ID', options);
};

/**
 * Format percentage
 * @param {number} value - The percentage value
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted percentage string
 */
export const formatPercentage = (value, decimals = 1) => {
  return `${value.toFixed(decimals)}%`;
};

/**
 * Get status color class based on status
 * @param {string} status - The status string (safe, reorder, low, out)
 * @returns {string} Tailwind CSS classes for the status color
 */
export const getStatusColorClass = (status) => {
  const statusColors = {
    safe: 'bg-green-100 text-green-800',
    reorder: 'bg-yellow-100 text-yellow-800',
    low: 'bg-red-100 text-red-800',
    out: 'bg-gray-100 text-gray-800',
    sufficient: 'bg-green-100 text-green-800',
  };
  return statusColors[status] || 'bg-gray-100 text-gray-800';
};

/**
 * Get status dot color class
 * @param {string} color - The color string (green, yellow, red)
 * @returns {string} Tailwind CSS classes for the dot color
 */
export const getStatusDotClass = (color) => {
  const dotColors = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
    gray: 'bg-gray-500',
  };
  return dotColors[color] || 'bg-gray-500';
};

/**
 * Truncate text with ellipsis
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 20) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};
