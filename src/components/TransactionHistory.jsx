import { transactions } from "../data/mockData";

function fmt(n) {
  return "₹" + n.toLocaleString("en-IN");
}

export default function TransactionHistory({ campaign, month }) {
  const filtered = transactions.filter((transaction) => {
    const campaignMatch =
      campaign === "All campaigns" || transaction.campaign === campaign;

    const monthMatch =
      month === "all" ||
      transaction.date.includes(
        new Date(`${month}-01`).toLocaleString("en-US", {
          month: "short",
        }),
      );

    return campaignMatch && monthMatch;
  });

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-5">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-800">
          Transaction History
        </h2>
      </div>

      {filtered.length === 0 ? (
        <div className="py-8 text-center text-sm text-gray-400">
          No transactions found.
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {filtered.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between px-4 py-4"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {transaction.campaign}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {transaction.date} • {transaction.type}
                </p>
              </div>

              <span className="text-sm font-semibold text-green-600">
                +{fmt(transaction.amount)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
