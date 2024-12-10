import "./App.css";
import Hero from "./components/Hero";
import photo from "./assets/photo.jpeg";
import AccountStats from "./components/AccountStats";
import History from "./components/History";
import transactions from "./assets/transactions.json";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero firstName="Chelsea" lastName="Immanuela" photo={photo} />
        <AccountStats accountNo="100899" balance="10.000.000,00" />
        <History transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
