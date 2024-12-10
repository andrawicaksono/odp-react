import "./App.css";
import Hero from "./components/Hero";
import AccountStats from "./components/AccountStats";
import History from "./components/History";
import Navbar from "./components/Navbar";

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
