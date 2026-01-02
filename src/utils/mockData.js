// Mock Data for Inventory Management System
// Two Business Units: Bakso Malang & Steam Cuci Motor/Mobil

// =====================
// DASHBOARD DATA
// =====================
export const dashboardData = {
  kpiStats: [
    {
      id: 1,
      title: "Today's Sales",
      value: "Rp 2,450,000",
      change: "+12%",
      trend: "up",
      icon: "TrendingUp",
    },
    {
      id: 2,
      title: "Total Transactions",
      value: "87",
      change: "+5",
      trend: "up",
      icon: "ShoppingCart",
    },
    {
      id: 3,
      title: "Low Stock Items",
      value: "12",
      status: "alert",
      icon: "AlertTriangle",
    },
  ],

  stockItemsBakso: [
    { id: 1, name: "Bakso", quantity: "450 pcs", status: "safe", statusColor: "green" },
    { id: 2, name: "Mie", quantity: "5.2 kg", status: "safe", statusColor: "green" },
    { id: 3, name: "Sayur Sawi", quantity: "150 g", status: "low", statusColor: "red" },
    { id: 4, name: "Garam", quantity: "200 g", status: "reorder", statusColor: "yellow" },
    { id: 5, name: "Kaldu", quantity: "10 L", status: "safe", statusColor: "green" },
    { id: 6, name: "Bawang Goreng", quantity: "500 g", status: "safe", statusColor: "green" },
  ],

  stockItemsSteam: [
    { id: 1, name: "Shampoo Mobil", quantity: "12 btl", status: "safe", statusColor: "green" },
    { id: 2, name: "Wax Polish", quantity: "8 btl", status: "safe", statusColor: "green" },
    { id: 3, name: "Microfiber", quantity: "5 pcs", status: "low", statusColor: "red" },
    { id: 4, name: "Tire Cleaner", quantity: "3 btl", status: "reorder", statusColor: "yellow" },
    { id: 5, name: "Glass Cleaner", quantity: "15 btl", status: "safe", statusColor: "green" },
  ],

  alerts: [
    {
      id: 1,
      type: "danger",
      message: "Sayur Sawi stock below minimum (150g < 500g)",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      type: "danger",
      message: "Microfiber stock below minimum (5 pcs < 10 pcs)",
      timestamp: "3 hours ago",
    },
    {
      id: 3,
      type: "warning",
      message: "Garam stock approaching minimum (200g)",
      timestamp: "5 hours ago",
    },
    {
      id: 4,
      type: "success",
      message: "Stock In: Bakso (500 pcs) received",
      timestamp: "Today 08:30",
    },
    {
      id: 5,
      type: "info",
      message: "Daily report generated successfully",
      timestamp: "Today 07:00",
    },
  ],

  topProducts: [
    { id: 1, rank: 1, name: "Bakso Jumbo", quantity: "45x", revenue: "Rp 1,125,000" },
    { id: 2, rank: 2, name: "Mie Ayam Special", quantity: "38x", revenue: "Rp 760,000" },
    { id: 3, rank: 3, name: "Cuci Mobil Komplit", quantity: "32x", revenue: "Rp 960,000" },
    { id: 4, rank: 4, name: "Es Teh Manis", quantity: "28x", revenue: "Rp 140,000" },
    { id: 5, rank: 5, name: "Cuci Motor", quantity: "25x", revenue: "Rp 375,000" },
  ],

  salesTrend: [
    { day: "Sen", value: 1800000 },
    { day: "Sel", value: 2200000 },
    { day: "Rab", value: 1950000 },
    { day: "Kam", value: 2450000 },
    { day: "Jum", value: 2800000 },
    { day: "Sab", value: 3200000 },
    { day: "Min", value: 2900000 },
  ],
};

// =====================
// POS DATA
// =====================
export const posData = {
  menuItems: [
    {
      id: 1,
      name: "Bakso Jumbo",
      price: 25000,
      category: "Food",
      stockAvailable: true,
      icon: "🍲",
    },
    {
      id: 2,
      name: "Mie Ayam Special",
      price: 20000,
      category: "Food",
      stockAvailable: true,
      icon: "🍜",
    },
    {
      id: 3,
      name: "Sayur Asem",
      price: 15000,
      category: "Food",
      stockAvailable: false,
      missingIngredients: ["Sayur Sawi"],
      icon: "🥗",
    },
    {
      id: 4,
      name: "Es Teh Manis",
      price: 5000,
      category: "Beverage",
      stockAvailable: true,
      icon: "🥤",
    },
    {
      id: 5,
      name: "Es Jeruk",
      price: 7000,
      category: "Beverage",
      stockAvailable: true,
      icon: "🍊",
    },
    {
      id: 6,
      name: "Kerupuk",
      price: 3000,
      category: "Snack",
      stockAvailable: true,
      icon: "🍢",
    },
    {
      id: 7,
      name: "Cuci Mobil Komplit",
      price: 30000,
      category: "Service",
      stockAvailable: true,
      icon: "🚗",
    },
    {
      id: 8,
      name: "Cuci Motor",
      price: 15000,
      category: "Service",
      stockAvailable: true,
      icon: "🏍️",
    },
    {
      id: 9,
      name: "Wax Polish Mobil",
      price: 50000,
      category: "Service",
      stockAvailable: true,
      icon: "✨",
    },
    {
      id: 10,
      name: "Vacuum Interior",
      price: 25000,
      category: "Service",
      stockAvailable: false,
      missingIngredients: ["Vacuum Bag"],
      icon: "🧹",
    },
  ],

  categories: ["All", "Food", "Beverage", "Snack", "Service"],

  paymentMethods: [
    { id: "cash", label: "Cash", icon: "Banknote" },
    { id: "e-wallet", label: "E-Wallet (Gopay/OVO)", icon: "Smartphone" },
    { id: "debit", label: "Debit Card", icon: "CreditCard" },
    { id: "qris", label: "QRIS", icon: "QrCode" },
  ],
};

// =====================
// PRODUCTS DATA
// =====================
export const productsData = {
  productsList: [
    {
      id: 1,
      name: "Bakso Jumbo",
      type: "recipe",
      category: "Food",
      price: 25000,
      icon: "🍲",
      businessUnit: "Bakso Malang",
    },
    {
      id: 2,
      name: "Mie Ayam Special",
      type: "recipe",
      category: "Food",
      price: 20000,
      icon: "🍜",
      businessUnit: "Bakso Malang",
    },
    {
      id: 3,
      name: "Es Teh Manis",
      type: "simple",
      category: "Beverage",
      price: 5000,
      stock: "45 cups",
      icon: "🥤",
      businessUnit: "Bakso Malang",
    },
    {
      id: 4,
      name: "Kerupuk",
      type: "simple",
      category: "Snack",
      price: 3000,
      stock: "120 pcs",
      icon: "🍢",
      businessUnit: "Bakso Malang",
    },
    {
      id: 5,
      name: "Shampoo Mobil",
      type: "simple",
      category: "Cleaning",
      price: 15000,
      stock: "12 btl",
      icon: "🧴",
      businessUnit: "Steam Cuci",
    },
    {
      id: 6,
      name: "Cuci Mobil Komplit",
      type: "recipe",
      category: "Service",
      price: 30000,
      icon: "🚗",
      businessUnit: "Steam Cuci",
    },
  ],

  ingredientsList: [
    { id: 1, name: "Bakso", unit: "pcs", currentStock: 450, minStock: 100, price: 1000 },
    { id: 2, name: "Mie", unit: "gram", currentStock: 5200, minStock: 1000, price: 25 },
    { id: 3, name: "Sayur Sawi", unit: "gram", currentStock: 150, minStock: 500, price: 15 },
    { id: 4, name: "Garam", unit: "gram", currentStock: 200, minStock: 200, price: 5 },
    { id: 5, name: "Kaldu", unit: "ml", currentStock: 10000, minStock: 2000, price: 10 },
    { id: 6, name: "Bawang Goreng", unit: "gram", currentStock: 500, minStock: 200, price: 50 },
    { id: 7, name: "Shampoo Mobil", unit: "ml", currentStock: 6000, minStock: 2000, price: 20 },
    { id: 8, name: "Wax Polish", unit: "ml", currentStock: 4000, minStock: 1000, price: 35 },
    { id: 9, name: "Microfiber", unit: "pcs", currentStock: 5, minStock: 10, price: 15000 },
  ],

  recipeDetail: {
    productName: "Bakso Jumbo",
    ingredients: [
      { name: "Bakso", required: "5 pcs", currentStock: "450 pcs", status: "sufficient", statusColor: "green" },
      { name: "Mie", required: "100 gram", currentStock: "5200 gram", status: "sufficient", statusColor: "green" },
      { name: "Sayur Sawi", required: "50 gram", currentStock: "150 gram", status: "low", statusColor: "red" },
      { name: "Garam", required: "5 gram", currentStock: "200 gram", status: "reorder", statusColor: "yellow" },
      { name: "Kaldu", required: "500 ml", currentStock: "10000 ml", status: "sufficient", statusColor: "green" },
    ],
    maxServings: 3,
    limitingIngredient: "Sayur Sawi",
    salesStats: {
      totalSold: 345,
      avgPerDay: 11.5,
      revenue: 8625000,
    },
  },
};

// =====================
// INVENTORY DATA
// =====================
export const inventoryData = {
  currentStock: [
    { id: 1, name: "Bakso", type: "Ingredient", unit: "pcs", current: 450, minimum: 100, status: "safe", statusColor: "green" },
    { id: 2, name: "Mie", type: "Ingredient", unit: "gram", current: 5200, minimum: 1000, status: "safe", statusColor: "green" },
    { id: 3, name: "Sayur Sawi", type: "Ingredient", unit: "gram", current: 150, minimum: 500, status: "low", statusColor: "red" },
    { id: 4, name: "Garam", type: "Ingredient", unit: "gram", current: 200, minimum: 200, status: "reorder", statusColor: "yellow" },
    { id: 5, name: "Kaldu", type: "Ingredient", unit: "ml", current: 10000, minimum: 2000, status: "safe", statusColor: "green" },
    { id: 6, name: "Shampoo Mobil", type: "Product", unit: "bottle", current: 12, minimum: 5, status: "safe", statusColor: "green" },
    { id: 7, name: "Wax Polish", type: "Product", unit: "bottle", current: 8, minimum: 5, status: "safe", statusColor: "green" },
    { id: 8, name: "Microfiber", type: "Product", unit: "pcs", current: 5, minimum: 10, status: "low", statusColor: "red" },
    { id: 9, name: "Tire Cleaner", type: "Product", unit: "bottle", current: 3, minimum: 5, status: "reorder", statusColor: "yellow" },
  ],

  stockInEntries: [
    { id: 1, date: "02/01/2026 08:30", item: "Bakso", quantity: "500 pcs", supplier: "Supplier A", cost: 500000, entryBy: "Admin" },
    { id: 2, date: "01/01/2026 15:20", item: "Mie", quantity: "10 kg", supplier: "Supplier B", cost: 250000, entryBy: "Staff1" },
    { id: 3, date: "01/01/2026 10:00", item: "Shampoo Mobil", quantity: "20 btl", supplier: "Supplier C", cost: 600000, entryBy: "Admin" },
    { id: 4, date: "31/12/2025 14:00", item: "Kaldu", quantity: "50 L", supplier: "Supplier A", cost: 500000, entryBy: "Staff2" },
  ],

  stockAdjustments: [
    { id: 1, date: "01/01/2026 16:00", item: "Sayur Sawi", quantity: "-100 g", type: "Waste", reason: "Wilted", by: "Staff1" },
    { id: 2, date: "31/12/2025 09:00", item: "Bakso", quantity: "-50 pcs", type: "Expired", reason: "Past date", by: "Admin" },
    { id: 3, date: "30/12/2025 11:00", item: "Mie", quantity: "-200 g", type: "Damaged", reason: "Packaging torn", by: "Staff2" },
  ],

  stockHistory: [
    { id: 1, datetime: "02/01/2026 08:30", item: "Bakso", type: "in", quantity: "+500 pcs", balance: 500, notes: "PO#123" },
    { id: 2, datetime: "02/01/2026 09:15", item: "Bakso", type: "sale", quantity: "-5 pcs", balance: 495, notes: "Order #0782" },
    { id: 3, datetime: "02/01/2026 09:30", item: "Bakso", type: "sale", quantity: "-5 pcs", balance: 490, notes: "Order #0783" },
    { id: 4, datetime: "02/01/2026 10:00", item: "Sayur Sawi", type: "adjustment", quantity: "-100 g", balance: 50, notes: "Waste: Wilted" },
    { id: 5, datetime: "02/01/2026 10:30", item: "Sayur Sawi", type: "in", quantity: "+1000 g", balance: 1050, notes: "PO#124" },
    { id: 6, datetime: "02/01/2026 11:00", item: "Mie", type: "sale", quantity: "-100 g", balance: 5100, notes: "Order #0784" },
  ],
};

// =====================
// REPORTS DATA
// =====================
export const reportsData = {
  stockSummary: {
    totalItems: 45,
    safeStock: 28,
    safePercentage: 62,
    reorderSoon: 10,
    reorderPercentage: 22,
    lowStock: 7,
    lowPercentage: 16,
    outOfStock: 0,
    outPercentage: 0,
  },

  criticalItems: [
    { id: 1, item: "Sayur Sawi", current: "150 g", minimum: "500 g", action: "Order 5 kg" },
    { id: 2, item: "Microfiber", current: "5 pcs", minimum: "10 pcs", action: "Order 20 pcs" },
    { id: 3, item: "Tire Cleaner", current: "2 btl", minimum: "5 btl", action: "Order 10 bottles" },
  ],

  topUsedIngredients: [
    { id: 1, ingredient: "Mie", used: "-8.5 kg", restocked: "+10 kg", netChange: "+1.5 kg", netColor: "green" },
    { id: 2, ingredient: "Bakso", used: "-250 pcs", restocked: "+500 pcs", netChange: "+250 pcs", netColor: "green" },
    { id: 3, ingredient: "Sayur Sawi", used: "-2 kg", restocked: "+1 kg", netChange: "-1 kg", netColor: "red" },
    { id: 4, ingredient: "Kaldu", used: "-15 L", restocked: "+20 L", netChange: "+5 L", netColor: "green" },
  ],

  stockValuation: {
    baksoUnitValue: 12450000,
    steamUnitValue: 3200000,
    totalValue: 15650000,
    topValuable: [
      { item: "Bakso (450 pcs @ Rp 1,000)", value: 450000 },
      { item: "Shampoo Mobil (12 btl @ Rp 30,000)", value: 360000 },
      { item: "Kaldu (10 L @ Rp 10,000)", value: 100000 },
    ],
  },

  salesSummary: {
    totalRevenue: 4850000,
    totalTransactions: 165,
    averageOrder: 29394,
    baksoRevenue: 3200000,
    baksoPercentage: 66,
    steamRevenue: 1650000,
    steamPercentage: 34,
  },

  topSellingProducts: [
    { rank: 1, name: "Bakso Jumbo", qty: "45x", revenue: 1125000 },
    { rank: 2, name: "Mie Ayam Special", qty: "38x", revenue: 760000 },
    { rank: 3, name: "Cuci Mobil Komplit", qty: "32x", revenue: 960000 },
    { rank: 4, name: "Es Teh Manis", qty: "28x", revenue: 140000 },
    { rank: 5, name: "Cuci Motor", qty: "25x", revenue: 375000 },
  ],

  profitLoss: {
    revenue: 45850000,
    cogsIngredients: 12500000,
    cogsProducts: 3800000,
    totalCogs: 16300000,
    grossProfit: 29550000,
    grossMargin: 64.4,
    salaries: 8000000,
    utilities: 1500000,
    rent: 5000000,
    otherExpenses: 1200000,
    totalOpex: 15700000,
    netProfit: 13850000,
    netMargin: 30.2,
  },
};

// =====================
// NAVIGATION DATA
// =====================
export const navigationData = {
  user: {
    name: "Admin",
    role: "Administrator",
    avatarInitials: "AD",
  },
  menuItems: [
    { label: "Dashboard", icon: "LayoutDashboard", path: "/dashboard" },
    { label: "POS", icon: "ShoppingCart", path: "/pos" },
    { label: "Products", icon: "Package", path: "/products" },
    { label: "Inventory", icon: "Warehouse", path: "/inventory" },
    { label: "Reports", icon: "BarChart3", path: "/reports" },
  ],
};
