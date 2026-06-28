import { useNavigate } from "react-router-dom";
import { invoices } from "../data/mockData";

function fmt(n) {
  return "₹" + n.toLocaleString("en-IN");
}

export default function Invoices() {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-5 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-700">
          Invoices and statements
        </h2>
        <span className="text-xs text-gray-400">
          {invoices.length} invoices
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[520px]">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-2">
                Invoice
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-2">
                Date
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-2">
                Description
              </th>
              <th className="text-right text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-2">
                Amount
              </th>
              <th className="text-right text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-2">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr
                key={inv.id}
                className="border-b border-gray-100 last:border-none hover:bg-gray-50"
              >
                <td className="px-4 py-3">
                  <button
                    onClick={() => navigate(`/invoice/${inv.invoiceNumber}`)}
                    className="font-mono text-xs text-blue-600 hover:underline"
                  >
                    {inv.invoiceNumber}
                  </button>
                </td>
                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                  {inv.date}
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {inv.campaigns} campaigns · {inv.month.split(" ")[0]}
                </td>
                <td className="px-4 py-3 text-right font-medium text-gray-900 whitespace-nowrap">
                  {fmt(inv.total)}
                </td>
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  <span className="text-xs font-medium bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                    Paid
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
