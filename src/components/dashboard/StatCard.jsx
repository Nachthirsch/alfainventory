import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  AlertTriangle,
  DollarSign,
  Package,
  Users,
  Activity,
} from 'lucide-react';
import Card from '../common/Card';

const iconMap = {
  TrendingUp: TrendingUp,
  TrendingDown: TrendingDown,
  ShoppingCart: ShoppingCart,
  AlertTriangle: AlertTriangle,
  DollarSign: DollarSign,
  Package: Package,
  Users: Users,
  Activity: Activity,
};

/**
 * KPI Stat Card component
 */
const StatCard = ({ stat }) => {
  const Icon = iconMap[stat.icon];
  const isPositive = stat.trend === 'up';
  const isAlert = stat.status === 'alert';

  return (
    <Card hover className="relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-600">{stat.title}</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
          {stat.change && (
            <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span>{stat.change} from yesterday</span>
            </div>
          )}
          {isAlert && (
            <div className="flex items-center gap-1 text-sm text-red-600">
              <AlertTriangle className="w-4 h-4" />
              <span>Needs attention</span>
            </div>
          )}
        </div>
        <div
          className={`p-3 rounded-lg ${
            isAlert
              ? 'bg-red-100 text-red-600'
              : isPositive
              ? 'bg-green-100 text-green-600'
              : 'bg-blue-100 text-blue-600'
          }`}
        >
          {Icon && <Icon className="w-6 h-6" />}
        </div>
      </div>

      {/* Decorative gradient */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 ${
          isAlert
            ? 'bg-gradient-to-r from-red-400 to-red-600'
            : isPositive
            ? 'bg-gradient-to-r from-green-400 to-green-600'
            : 'bg-gradient-to-r from-blue-400 to-blue-600'
        }`}
      />
    </Card>
  );
};

export default StatCard;
