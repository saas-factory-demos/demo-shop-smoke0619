// 由 SaaS Factory 自動生成，請勿手動編輯（升級時會被覆蓋）。
// 客戶：示範電商客戶（日青選物）
// subdomain：demo-shop-smoke0619

export const projectConfig = {
  client: {
  "clientName": "示範電商客戶",
  "brandName": "日青選物",
  "contactEmail": "demo-shop@saas-factory.dev",
  "subdomain": "demo-shop-smoke0619"
},
  siteTypes: {
  "enabled": [
    "shop",
    "blog"
  ]
},
  modules: {
    enabled: [
  "marketing.abandoned-cart",
  "marketing.coupons",
  "shop.points",
  "shop.product-variants",
  "shop.wishlist"
] as const,
  },
  integrations: {
  "payments": [
    "newebpay",
    "linepay"
  ],
  "shipping": [
    "tcat",
    "seven-eleven",
    "family-mart"
  ],
  "invoice": {
    "providers": [
      "ezpay"
    ],
    "mode": "realtime"
  },
  "notifications": [
    "email",
    "line"
  ]
},
  theme: {
  "presetId": "beauty-boutique",
  "primaryColor": "#d28a8a",
  "accentColor": "#f3d4d4",
  "radius": "soft",
  "font": "sans",
  "density": "normal",
  "darkMode": "light",
  "motionLevel": 3
},
  i18n: {
  "defaultLocale": "zh-TW",
  "enabledLocales": [
    "zh-TW"
  ],
  "multiCurrency": false,
  "multiTimezone": false
},
  deploy: {
  "target": "vercel",
  "repoName": "demo-shop-smoke0619",
  "environments": [
    "production"
  ],
  "privateRepo": false
},
} as const;

export type ProjectConfig = typeof projectConfig;
