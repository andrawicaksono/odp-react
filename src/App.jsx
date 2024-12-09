import "./App.css";
import Hero from "./components/Hero";
import photo from "./assets/photo.jpeg";
import AccountStats from "./components/AccountStats";

function App() {
  return (
    <div>
      <Hero firstName="Chelsea" lastName="Immanuela" photo={photo} />
      <AccountStats accountNo="100899" balance="10.000.000,00" />
    </div>
  );
}

export default App;
