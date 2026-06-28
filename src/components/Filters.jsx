import { campaigns } from "../data/mockData";

const months = [
  { label: "All", value: "all" },
  { label: "Jun", value: "2026-06" },
  { label: "May", value: "2026-05" },
  { label: "Apr", value: "2026-04" },
];

export default function Filters({ campaign, setCampaign, month, setMonth }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
      {/* Date Filter */}
      <div className="mb-5">
        <p className="text-sm font-medium text-gray-700 mb-3">Date</p>

        <div className="flex flex-wrap gap-2">
          {months.map((item) => (
            <button
              key={item.value}
              onClick={() => setMonth(item.value)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                month === item.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Campaign Filter */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">Campaign</p>

        <div className="flex flex-wrap gap-2">
          {campaigns.map((item) => (
            <button
              key={item}
              onClick={() => setCampaign(item)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                campaign === item
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.replace("All campaigns", "All")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
