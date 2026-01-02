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
    { id: 'stock', label: 'Stock Reports' },
    { id: 'sales', label: 'Sales Reports' },
    { id: 'financial', label: 'Financial Reports' },
  ];

  const dateRangeOptions = [
    { value: 'today', label: 'Today' },
    { value: 'this-week', label: 'This Week' },
    { value: 'this-month', label: 'This Month' },
    { value: 'last-month', label: 'Last Month' },
    { value: 'custom', label: 'Custom Range' },
  ];

  return (
    <MainLayout>
      {/* Page Header */}
      <PageHeader
        title="Reports"
        subtitle="Analytics and business insights"
        actions={
          <div className="flex items-center gap-3">
            <Select
              options={dateRangeOptions}
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              selectClassName="w-40"
            />
            <Button variant="outline" icon={Printer} size="sm">
              Print
            </Button>
            <Button variant="outline" icon={Download} size="sm">
              Export
            </Button>
          </div>
        }
      />

      {/* Business Unit Filter */}
      <div className="flex items-center gap-4 mb-6 p-4 bg-white rounded-lg border border-gray-200">
        <span className="text-sm font-medium text-gray-700">Business Unit:</span>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white">
            All Units
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
          <ReportCard title="Stock Status Overview" description="Current inventory health status">
            <StockStatusOverview summary={reportsData.stockSummary} />
          </ReportCard>

          {/* Critical Stock Items */}
          <ReportCard
            title="Critical Stock Items"
            description="Items requiring immediate attention"
          >
            <CriticalStockTable items={reportsData.criticalItems} />
          </ReportCard>

          {/* Stock Movement Analysis */}
          <ReportCard
            title="Stock Movement Analysis"
            description="Ingredient usage vs restocking this period"
          >
            <StockMovementTable movements={reportsData.topUsedIngredients} />
          </ReportCard>

          {/* Stock Valuation */}
          <ReportCard
            title="Stock Valuation"
            description="Total value of current inventory"
          >
            <StockValuation valuation={reportsData.stockValuation} />
          </ReportCard>
        </>
      )}

      {/* Sales Reports */}
      {activeTab === 'sales' && (
        <>
          {/* Sales Summary */}
          <ReportCard title="Sales Summary" description="Revenue and transaction overview">
            <SalesSummary summary={reportsData.salesSummary} />
          </ReportCard>

          {/* Top Selling Products */}
          <ReportCard
            title="Top Selling Products"
            description="Best performing products this period"
          >
            <TopSellingTable products={reportsData.topSellingProducts} />
          </ReportCard>

          {/* Sales Trend Chart (Mock) */}
          <ReportCard title="Sales Trend" description="Daily sales over the period">
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
                <p className="text-sm">Sales trend visualization</p>
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
            title="Profit & Loss Statement"
            description="Financial performance summary"
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
                <h4 className="font-semibold text-blue-900 mb-1">Insights</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Gross margin is healthy at {reportsData.profitLoss.grossMargin}%</li>
                  <li>• Net profit margin of {reportsData.profitLoss.netMargin}% is above industry average</li>
                  <li>• Consider optimizing COGS to improve margins further</li>
                  <li>• Operating expenses are within expected range</li>
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
