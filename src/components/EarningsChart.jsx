import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { earningsChart } from "../data/mockData";

const formatCurrency = (value) => `₹${value.toLocaleString("en-IN")}`;

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md px-3 py-2">
      <p className="text-xs text-gray-500">{label} 2026</p>
      <p className="text-sm font-semibold text-gray-900">
        {formatCurrency(payload[0].value)}
      </p>
    </div>
  );
};

export default function EarningsChart() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Earnings Overview
          </h2>
          <p className="text-sm text-gray-500">January – June 2026</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart
          data={earningsChart}
          margin={{
            top: 10,
            right: 10,
            left: -10,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            stroke="#f3f4f6"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#6b7280",
              fontSize: 12,
            }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#9ca3af",
              fontSize: 11,
            }}
            tickFormatter={(value) => `₹${value / 1000}k`}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#2563eb",
              strokeDasharray: "4 4",
            }}
          />

          <Area
            type="monotone"
            dataKey="earnings"
            stroke="#2563eb"
            strokeWidth={3}
            fill="url(#earningsGradient)"
            dot={{
              r: 4,
              fill: "#2563eb",
              strokeWidth: 2,
              stroke: "#fff",
            }}
            activeDot={{
              r: 6,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
