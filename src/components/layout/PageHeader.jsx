import React from 'react';
import Button from '../common/Button';

/**
 * Page Header component
 */
const PageHeader = ({
  title,
  subtitle,
  actions,
  breadcrumb,
  className = '',
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      {/* Breadcrumb */}
      {breadcrumb && (
        <nav className="text-sm text-gray-500 mb-2">
          {breadcrumb.map((item, index) => (
            <span key={index}>
              {index > 0 && <span className="mx-2">/</span>}
              {item.href ? (
                <a href={item.href} className="hover:text-gray-700">
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-900">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}

      {/* Title and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
        {actions && (
          <div className="flex flex-wrap items-center gap-3">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
