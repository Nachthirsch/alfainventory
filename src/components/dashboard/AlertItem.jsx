import React from 'react';
import {
  AlertTriangle,
  CheckCircle,
  AlertCircle,
  Info,
  Clock,
} from 'lucide-react';

const typeConfig = {
  danger: {
    icon: AlertTriangle,
    bgColor: 'bg-red-50',
    borderColor: 'border-l-red-500',
    iconColor: 'text-red-500',
  },
  warning: {
    icon: AlertCircle,
    bgColor: 'bg-yellow-50',
    borderColor: 'border-l-yellow-500',
    iconColor: 'text-yellow-500',
  },
  success: {
    icon: CheckCircle,
    bgColor: 'bg-green-50',
    borderColor: 'border-l-green-500',
    iconColor: 'text-green-500',
  },
  info: {
    icon: Info,
    bgColor: 'bg-blue-50',
    borderColor: 'border-l-blue-500',
    iconColor: 'text-blue-500',
  },
};

/**
 * Alert Item component
 */
const AlertItem = ({ alert }) => {
  const config = typeConfig[alert.type] || typeConfig.info;
  const Icon = config.icon;

  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-r-lg border-l-4 ${config.bgColor} ${config.borderColor}`}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.iconColor}`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-800">{alert.message}</p>
        <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
          <Clock className="w-3 h-3" />
          <span>{alert.timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default AlertItem;
