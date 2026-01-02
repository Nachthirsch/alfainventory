import React from 'react';
import { Download, Printer } from 'lucide-react';
import Card from '../common/Card';

/**
 * Report Card container component
 */
const ReportCard = ({ title, description, children, actions }) => {
  return (
    <Card padding="default" className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
        {actions || (
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <Printer className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
      {children}
    </Card>
  );
};

export default ReportCard;
