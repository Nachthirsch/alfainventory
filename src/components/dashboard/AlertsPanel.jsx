import React from 'react';
import { ChevronRight, Bell } from 'lucide-react';
import Card from '../common/Card';
import AlertItem from './AlertItem';

/**
 * Alerts Panel component
 */
const AlertsPanel = ({ alerts }) => {
  return (
    <Card padding="default">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">
            Peringatan & Notifikasi
          </h3>
          {alerts.length > 0 && (
            <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800 rounded-full">
              {alerts.length}
            </span>
          )}
        </div>
        <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
          Lihat Semua
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Alert List */}
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {alerts.map((alert) => (
          <AlertItem key={alert.id} alert={alert} />
        ))}
      </div>

      {alerts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <Bell className="w-12 h-12 mx-auto text-gray-300 mb-2" />
          <p>Tidak ada peringatan saat ini</p>
        </div>
      )}
    </Card>
  );
};

export default AlertsPanel;
