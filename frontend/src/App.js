import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Sales from "./pages/Sales";

function App() {
  return (
    <Router>
      <div className="flex bg-slate-950 text-white min-h-screen">
        <Sidebar />

        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;