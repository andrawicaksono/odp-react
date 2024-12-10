import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import TransferPage from "./pages/TransferPage.jsx";
import TopUpPage from "./pages/TopUpPage.jsx";
import Navbar from "./components/Navbar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/topup" element={<TopUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
