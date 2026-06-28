import { payoutMethods } from "../data/mockData";

export default function PayoutMethod() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-5">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-800">Payout Method</h2>
      </div>

      <div className="divide-y divide-gray-100">
        {payoutMethods.map((m) => (
          <div key={m.id} className="flex items-center gap-3 px-4 py-4">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-lg">
              {m.type === "bank" ? "🏦" : "📱"}
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{m.label}</p>

              <p className="text-xs text-gray-500 mt-1">{m.detail}</p>

              <div className="flex gap-2 mt-2">
                {m.primary && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">
                    Primary
                  </span>
                )}

                <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">
                  ✓ Verified
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
