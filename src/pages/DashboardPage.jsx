import React from 'react';
import { Calendar, RefreshCw } from 'lucide-react';
import { MainLayout, PageHeader } from '../components/layout';
import { Button } from '../components/common';
import {
  StatCard,
  StockMonitoringPanel,
  SalesTrendChart,
  AlertsPanel,
  TopProductsPanel,
} from '../components/dashboard';
import { dashboardData } from '../utils/mockData';

/**
 * Dashboard Page
 */
const DashboardPage = () => {
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <MainLayout>
      {/* Page Header */}
      <PageHeader
        title="Dashboard"
        subtitle={today}
        actions={
          <>
            <Button variant="outline" icon={Calendar} size="sm">
              Today
            </Button>
            <Button variant="outline" icon={RefreshCw} size="sm">
              Refresh
            </Button>
          </>
        }
      />

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {dashboardData.kpiStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Stock Monitoring Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <StockMonitoringPanel
          title="Stock Bakso Malang"
          businessUnit="Food & Beverage"
          items={dashboardData.stockItemsBakso}
        />
        <StockMonitoringPanel
          title="Stock Steam Cuci"
          businessUnit="Motor/Mobil Service"
          items={dashboardData.stockItemsSteam}
        />
      </div>

      {/* Charts & Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <SalesTrendChart data={dashboardData.salesTrend} />
        <TopProductsPanel products={dashboardData.topProducts} />
      </div>

      {/* Alerts Section */}
      <div className="mb-6">
        <AlertsPanel alerts={dashboardData.alerts} />
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
