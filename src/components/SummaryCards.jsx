import { summary } from "../data/mockData";

const formatCurrency = (amount) => `₹${amount.toLocaleString("en-IN")}`;

function daysUntil(dateStr) {
  const today = new Date();
  const target = new Date(dateStr);

  const diff = Math.ceil((target - today) / (1000 * 60 * 60 * 24));

  if (diff <= 0) return "Today";
  if (diff === 1) return "Tomorrow";

  return `In ${diff} days`;
}

export default function SummaryCards() {
  const cards = [
    {
      title: "Total Earnings",
      value: formatCurrency(summary.totalEarned),
      subtitle: "All-time earnings",
      color: "bg-blue-500",
    },
    {
      title: "Pending Payout",
      value: formatCurrency(summary.pendingPayout),
      subtitle: `Expected ${daysUntil(summary.pendingDateRaw)}`,
      color: "bg-yellow-500",
    },
    {
      title: "Last Paid Out",
      value: formatCurrency(summary.lastPaidOut),
      subtitle: summary.lastPaidDate,
      color: "bg-green-500",
    },
    {
      title: "Active Campaigns",
      value: summary.activeCampaigns,
      subtitle: "Across all brands",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white border border-gray-200 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className={`w-2 h-2 rounded-full ${card.color}`} />

            <p className="text-xs font-medium text-gray-500">{card.title}</p>
          </div>

          <h2 className="text-lg font-semibold text-gray-900">{card.value}</h2>

          <p className="mt-1 text-xs text-gray-400">{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
