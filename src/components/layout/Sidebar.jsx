import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Warehouse,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from 'lucide-react';
import { navigationData } from '../../utils/mockData';

const iconMap = {
  LayoutDashboard: LayoutDashboard,
  ShoppingCart: ShoppingCart,
  Package: Package,
  Warehouse: Warehouse,
  BarChart3: BarChart3,
};

/**
 * Sidebar Navigation component (Alternative to top navigation)
 */
const Sidebar = ({ collapsed, onToggle }) => {
  const location = useLocation();
  const { user, menuItems } = navigationData;

  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-40 transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            {!collapsed && (
              <span className="text-xl font-bold text-gray-900">
                AlfaInventory
              </span>
            )}
          </Link>
          <button
            onClick={onToggle}
            className="p-1 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                } ${collapsed ? 'justify-center' : ''}`}
                title={collapsed ? item.label : ''}
              >
                {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="border-t border-gray-200 p-4">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-medium text-white">
                {user.avatarInitials}
              </span>
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.role}</p>
              </div>
            )}
          </div>
          {!collapsed && (
            <button className="flex items-center gap-2 w-full mt-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <LogOut className="w-4 h-4" />
              Keluar
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
