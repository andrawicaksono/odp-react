import "./App.css";
import Hero from "./components/Hero";
import photo from "./assets/photo.jpeg";
import AccountStats from "./components/AccountStats";
import History from "./components/History";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { formatter } from "./helper/balanceFormatter";

function App() {
  const [account, setAccount] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await fetch("http://localhost:3000/balance");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setAccount(data);
      } catch (err) {
        // alert(err.message);
      }
    };

    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:3000/transactions");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setTransactions(data);
      } catch (err) {
        // alert(err.message);
      }
    };

    fetchAccount();
    fetchTransactions();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <AccountStats />
        <History />
      </div>
    </div>
  );
}

export default App;
