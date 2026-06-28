import { useParams, useNavigate } from "react-router-dom";
import { invoices } from "../data/mockData";

function fmt(n) {
  return "₹" + n.toLocaleString("en-IN");
}

export default function InvoiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const inv = invoices.find((i) => i.invoiceNumber === id);

  if (!inv)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Invoice not found.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6"
        >
          ← Back to payments
        </button>

        {/* Header */}
        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-gray-400 mb-1">Invoice number</p>
              <p className="font-mono text-base font-medium text-blue-600">
                {inv.invoiceNumber}
              </p>
            </div>
            <span className="text-xs font-medium bg-green-50 text-green-700 px-2.5 py-1 rounded-full">
              Paid
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Period</p>
              <p className="text-sm text-gray-900">{inv.month}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Issue date</p>
              <p className="text-sm text-gray-900">{inv.date}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Total amount</p>
              <p className="text-sm font-medium text-gray-900">
                {fmt(inv.total)}
              </p>
            </div>
          </div>
        </div>

        {/* Line items */}
        <div className="bg-white border border-gray-200 rounded-lg mb-4 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="text-sm font-medium text-gray-700">Line items</h2>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-2">
                  Campaign
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-2">
                  Type
                </th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-2">
                  Date
                </th>
                <th className="text-right text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-2">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {inv.lineItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 last:border-none hover:bg-gray-50"
                >
                  <td className="px-4 py-3 text-gray-900">{item.campaign}</td>
                  <td className="px-4 py-3 text-gray-500">{item.type}</td>
                  <td className="px-4 py-3 text-gray-500">{item.date}</td>
                  <td className="px-4 py-3 text-right font-medium text-gray-900">
                    {fmt(item.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Subtotal</span>
            <span className="text-sm text-gray-900">{fmt(inv.total)}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-500">Platform fee</span>
            <span className="text-sm text-gray-400">₹0</span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <span className="text-sm font-medium text-gray-900">
              Total paid
            </span>
            <span className="text-base font-medium text-gray-900">
              {fmt(inv.total)}
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          CreatorsMela · System-generated statement · support@creatorsmela.com
        </p>
      </div>
    </div>
  );
}
