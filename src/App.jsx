import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SummaryCards from "./components/SummaryCards";
import EarningsChart from "./components/EarningsChart";
import Filters from "./components/Filters";
import Payouts from "./components/Payouts";
import TransactionHistory from "./components/TransactionHistory";
import PayoutMethod from "./components/PayoutMethod";
import Invoices from "./components/Invoices";
import InvoiceDetail from "./pages/InvoiceDetail";

function Dashboard() {
  const [campaign, setCampaign] = useState("All campaigns");
  const [month, setMonth] = useState("2026-06");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-lg font-medium text-gray-900">
              Payments & payouts
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Last updated:{" "}
              {new Date().toLocaleString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            🔒 Secured
          </span>
        </div>

        <SummaryCards />
        <EarningsChart />
        <Filters
          campaign={campaign}
          setCampaign={setCampaign}
          month={month}
          setMonth={setMonth}
        />
        <Payouts month={month} />
        <TransactionHistory campaign={campaign} month={month} />
        <PayoutMethod />
        <Invoices />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/invoice/:id" element={<InvoiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
