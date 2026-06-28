import { payouts } from "../data/mockData";

const formatCurrency = (amount) => `₹${amount.toLocaleString("en-IN")}`;

export default function Payouts({ month }) {
  const filtered = payouts.filter((item) => {
    if (month === "all") return true;

    const monthName = new Date(`${month}-01`).toLocaleString("en-US", {
      month: "short",
    });

    return item.date.includes(monthName);
  });

  const pending = filtered.filter((item) => item.status === "pending");

  const completed = filtered.filter((item) => item.status === "paid");

  return (
    <div className="grid lg:grid-cols-2 gap-6 mb-6">
      {/* Pending */}
      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-900">
            Pending Payouts
          </h2>
          <p className="text-sm text-gray-500">
            Scheduled for your next payout cycle
          </p>
        </div>

        {pending.length === 0 ? (
          <div className="py-8 text-center text-sm text-gray-400">
            No pending payouts.
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {pending.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center px-5 py-4"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {formatCurrency(item.amount)}
                  </p>

                  <p className="text-sm text-gray-500">{item.date}</p>

                  <p className="text-xs text-gray-400">{item.method}</p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                  Pending
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Completed */}
      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-900">
            Completed Payouts
          </h2>

          <p className="text-sm text-gray-500">Successfully transferred</p>
        </div>

        {completed.length === 0 ? (
          <div className="py-8 text-center text-sm text-gray-400">
            No completed payouts.
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {completed.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center px-5 py-4"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {formatCurrency(item.amount)}
                  </p>

                  <p className="text-sm text-gray-500">{item.date}</p>

                  <p className="text-xs text-gray-400">{item.method}</p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  Paid
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
