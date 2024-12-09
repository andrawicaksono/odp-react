import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavLink } from "react-router";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import photo from "./assets/photo.jpeg";

function App() {
  return (
    <div>
      <Navbar active="dashboard" />
      <Hero firstName="Chelsea" lastName="Immanuela" photo={photo} />
    </div>
  );
}

export default App;
