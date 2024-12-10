import "./App.css";
import Hero from "./components/Hero";
import photo from "./assets/photo.jpeg";
import AccountStats from "./components/AccountStats";
import History from "./components/History";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { formatter } from "./helper/balanceFormatter";

function App() {
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
