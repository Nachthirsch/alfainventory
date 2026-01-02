import React, { useState } from 'react';
import { Calendar, Download, Printer, Filter } from 'lucide-react';
import { MainLayout, PageHeader } from '../components/layout';
import { Button, Tabs, Select } from '../components/common';
import {
  ReportCard,
  StockStatusOverview,
  CriticalStockTable,
  StockMovementTable,
  SalesSummary,
  TopSellingTable,
  ProfitLossStatement,
  StockValuation,
} from '../components/reports';
import { reportsData } from '../utils/mockData';

/**
 * Reports Page
 */
const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState('stock');
  const [dateRange, setDateRange] = useState('this-month');

  const tabs = [
    { id: 'stock', label: 'Laporan Stok' },
    { id: 'sales', label: 'Laporan Penjualan' },
    { id: 'financial', label: 'Laporan Keuangan' },
  ];

  const dateRangeOptions = [
    { value: 'today', label: 'Hari Ini' },
    { value: 'this-week', label: 'Minggu Ini' },
    { value: 'this-month', label: 'Bulan Ini' },
    { value: 'last-month', label: 'Bulan Lalu' },
    { value: 'custom', label: 'Rentang Kustom' },
  ];

  return (
    <MainLayout>
      {/* Page Header */}
      <PageHeader
        title="Laporan"
        subtitle="Analitik dan wawasan bisnis"
        actions={
          <div className="flex items-center gap-3">
            <Select
              options={dateRangeOptions}
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              selectClassName="w-40"
            />
            <Button variant="outline" icon={Printer} size="sm">
              Cetak
            </Button>
            <Button variant="outline" icon={Download} size="sm">
              Ekspor
            </Button>
          </div>
        }
      />

      {/* Business Unit Filter */}
      <div className="flex items-center gap-4 mb-6 p-4 bg-white rounded-lg border border-gray-200">
        <span className="text-sm font-medium text-gray-700">Unit Bisnis:</span>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white">
            Semua Unit
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">
            Bakso Malang
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">
            Steam Cuci
          </button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} className="mb-6" />

      {/* Stock Reports */}
      {activeTab === 'stock' && (
        <>
          {/* Stock Status Overview */}
          <ReportCard title="Ikhtisar Status Stok" description="Status kesehatan inventaris saat ini">
            <StockStatusOverview summary={reportsData.stockSummary} />
          </ReportCard>

          {/* Critical Stock Items */}
          <ReportCard
            title="Item Stok Kritis"
            description="Item yang memerlukan perhatian segera"
          >
            <CriticalStockTable items={reportsData.criticalItems} />
          </ReportCard>

          {/* Stock Movement Analysis */}
          <ReportCard
            title="Analisis Pergerakan Stok"
            description="Penggunaan bahan vs pengisian ulang periode ini"
          >
            <StockMovementTable movements={reportsData.topUsedIngredients} />
          </ReportCard>

          {/* Stock Valuation */}
          <ReportCard
            title="Valuasi Stok"
            description="Total nilai inventaris saat ini"
          >
            <StockValuation valuation={reportsData.stockValuation} />
          </ReportCard>
        </>
      )}

      {/* Sales Reports */}
      {activeTab === 'sales' && (
        <>
          {/* Sales Summary */}
          <ReportCard title="Ringkasan Penjualan" description="Ikhtisar pendapatan dan transaksi">
            <SalesSummary summary={reportsData.salesSummary} />
          </ReportCard>

          {/* Top Selling Products */}
          <ReportCard
            title="Produk Terlaris"
            description="Produk dengan performa terbaik periode ini"
          >
            <TopSellingTable products={reportsData.topSellingProducts} />
          </ReportCard>

          {/* Sales Trend Chart (Mock) */}
          <ReportCard title="Tren Penjualan" description="Penjualan harian selama periode">
            <div className="h-64 flex items-center justify-center bg-gradient-to-t from-blue-50 to-white rounded-lg">
              <div className="text-center text-gray-400">
                <div className="flex items-end justify-center gap-2 h-40 mb-4">
                  {[40, 65, 50, 80, 70, 90, 75].map((height, i) => (
                    <div
                      key={i}
                      className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <p className="text-sm">Visualisasi tren penjualan</p>
              </div>
            </div>
          </ReportCard>
        </>
      )}

      {/* Financial Reports */}
      {activeTab === 'financial' && (
        <>
          {/* Profit & Loss Statement */}
          <ReportCard
            title="Laporan Laba Rugi"
            description="Ringkasan kinerja keuangan"
          >
            <ProfitLossStatement data={reportsData.profitLoss} />
          </ReportCard>

          {/* Insights */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">💡</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Wawasan</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Margin kotor sehat pada {reportsData.profitLoss.grossMargin}%</li>
                  <li>• Margin laba bersih {reportsData.profitLoss.netMargin}% di atas rata-rata industri</li>
                  <li>• Pertimbangkan mengoptimalkan HPP untuk meningkatkan margin lebih lanjut</li>
                  <li>• Biaya operasional dalam rentang yang diharapkan</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default ReportsPage;
