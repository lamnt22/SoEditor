import { useState } from "react";
import HouseholdTable from "./components/HouseholdTable";
import SoSelection from "./components/SoSelection";
import SoPreview from "./components/SoPreview";
import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState<"households" | "selection" | "preview">("households");

  return (
    <div className="flex flex-col h-screen font-sans bg-gray-100 overflow-hidden">

      {/* Simulation of App Header */}
      <div className="bg-white flex items-center p-2 border-b gap-4">
        <div className="flex bg-blue-50 border border-blue-200 rounded overflow-hidden">
          <button
            onClick={() => setActiveTab("households")}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${activeTab === "households" ? "bg-blue-600 text-white" : "text-blue-800 hover:bg-blue-100"}`}
          >
            1. DS HỘ GIA ĐÌNH
          </button>
          <button
            onClick={() => setActiveTab("selection")}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${activeTab === "selection" ? "bg-blue-600 text-white" : "text-blue-800 hover:bg-blue-100"}`}
          >
            2. CHỌN LÒNG SỚ
          </button>
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${activeTab === "preview" ? "bg-blue-600 text-white" : "text-blue-800 hover:bg-blue-100"}`}
          >
            3. XEM TRƯỚC VÀ IN
          </button>
        </div>

        <div className="flex-1 text-center font-bold text-blue-800 text-xl tracking-wider">
          HỆ THỐNG VIỆT LẠC SỚ (MOCK DEMO)
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden relative">
        {activeTab === "households" && <HouseholdTable />}
        {activeTab === "selection" && <SoSelection />}
        {activeTab === "preview" && <SoPreview />}
      </div>

    </div>
  );
}

export default App;
