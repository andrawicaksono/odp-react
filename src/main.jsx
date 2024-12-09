import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import TransferPage from "./pages/TransferPage.jsx";
import TopUpPage from "./pages/TopUpPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/transfer" element={<TransferPage />} />
      <Route path="/topup" element={<TopUpPage />} />
    </Routes>
  </BrowserRouter>
);
