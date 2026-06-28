export const summary = {
  totalEarned: 548500,
  vsLastMonth: 14500,
  pendingPayout: 18200,
  pendingDate: "Jul 5, 2026",
  pendingDateRaw: "2026-07-05",
  lastPaidOut: 32000,
  lastPaidDate: "Jun 5, 2026",
  activeCampaigns: 4,
};

export const earningsChart = [
  { month: "Jan", earnings: 42000 },
  { month: "Feb", earnings: 38000 },
  { month: "Mar", earnings: 51000 },
  { month: "Apr", earnings: 34000 },
  { month: "May", earnings: 38000 },
  { month: "Jun", earnings: 52500 },
];

export const payouts = [
  {
    id: 1,
    amount: 18200,
    date: "Jul 5, 2026",
    method: "HDFC ••4521",
    status: "pending",
  },
  {
    id: 2,
    amount: 32000,
    date: "Jun 5, 2026",
    method: "HDFC ••4521",
    status: "paid",
  },
  {
    id: 3,
    amount: 12500,
    date: "May 5, 2026",
    method: "UPI ••9012",
    status: "paid",
  },
  {
    id: 4,
    amount: 8800,
    date: "Apr 5, 2026",
    method: "HDFC ••4521",
    status: "failed",
  },
];

export const transactions = [
  {
    id: 1,
    campaign: "Nike x Creator",
    date: "Jun 22, 2026",
    type: "Reel post",
    amount: 14000,
  },
  {
    id: 2,
    campaign: "Spotify Collab",
    date: "Jun 18, 2026",
    type: "Long-form video",
    amount: 22000,
  },
  {
    id: 3,
    campaign: "Mamaearth drop",
    date: "Jun 10, 2026",
    type: "Story series",
    amount: 9500,
  },
  {
    id: 4,
    campaign: "Boat Audio",
    date: "Jun 2, 2026",
    type: "Thread campaign",
    amount: 7000,
  },

  {
    id: 5,
    campaign: "Nike x Creator",
    date: "May 28, 2026",
    type: "Story post",
    amount: 6000,
  },
  {
    id: 6,
    campaign: "Spotify Collab",
    date: "May 15, 2026",
    type: "YouTube Short",
    amount: 8500,
  },
  {
    id: 7,
    campaign: "Mamaearth drop",
    date: "May 10, 2026",
    type: "Reel post",
    amount: 12500,
  },
  {
    id: 8,
    campaign: "Boat Audio",
    date: "May 3, 2026",
    type: "Story series",
    amount: 11000,
  },
];

export const payoutMethods = [
  {
    id: 1,
    type: "bank",
    label: "HDFC Bank",
    detail: "••••4521 · IFSC HDFC0001234",
    primary: true,
  },
  {
    id: 2,
    type: "upi",
    label: "UPI",
    detail: "vaibhav@okhdfc",
    primary: false,
  },
];

export const invoices = [
  {
    id: 1,
    invoiceNumber: "INV-2026-06",
    month: "June 2026",
    date: "Jun 30, 2026",
    total: 52500,
    campaigns: 4,
    lineItems: [
      {
        id: 1,
        campaign: "Nike x Creator",
        type: "Reel post",
        date: "Jun 22, 2026",
        amount: 14000,
      },
      {
        id: 2,
        campaign: "Spotify Collab",
        type: "Long-form video",
        date: "Jun 18, 2026",
        amount: 22000,
      },
      {
        id: 3,
        campaign: "Mamaearth drop",
        type: "Story series",
        date: "Jun 10, 2026",
        amount: 9500,
      },
      {
        id: 4,
        campaign: "Boat Audio",
        type: "Thread campaign",
        date: "Jun 2, 2026",
        amount: 7000,
      },
    ],
  },
  {
    id: 2,
    invoiceNumber: "INV-2026-05",
    month: "May 2026",
    date: "May 31, 2026",
    total: 38000,
    campaigns: 4,
    lineItems: [
      {
        id: 1,
        campaign: "Nike x Creator",
        type: "Story post",
        date: "May 28, 2026",
        amount: 6000,
      },
      {
        id: 2,
        campaign: "Spotify Collab",
        type: "YouTube Short",
        date: "May 15, 2026",
        amount: 8500,
      },
      {
        id: 3,
        campaign: "Mamaearth drop",
        type: "Reel post",
        date: "May 10, 2026",
        amount: 12500,
      },
      {
        id: 4,
        campaign: "Boat Audio",
        type: "Story series",
        date: "May 3, 2026",
        amount: 11000,
      },
    ],
  },
  {
    id: 3,
    invoiceNumber: "INV-2026-04",
    month: "April 2026",
    date: "Apr 30, 2026",
    total: 34000,
    campaigns: 2,
    lineItems: [
      {
        id: 1,
        campaign: "Nike x Creator",
        type: "Reel post",
        date: "Apr 20, 2026",
        amount: 18000,
      },
      {
        id: 2,
        campaign: "Spotify Collab",
        type: "Story series",
        date: "Apr 8, 2026",
        amount: 16000,
      },
    ],
  },
];

export const campaigns = [
  "All campaigns",
  "Nike x Creator",
  "Spotify Collab",
  "Mamaearth drop",
  "Boat Audio",
];
