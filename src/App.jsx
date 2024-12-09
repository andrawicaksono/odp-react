import "./App.css";
import Hero from "./components/Hero";
import photo from "./assets/photo.jpeg";

function App() {
  return (
    <div>
      <Hero firstName="Chelsea" lastName="Immanuela" photo={photo} />
    </div>
  );
}

export default App;
