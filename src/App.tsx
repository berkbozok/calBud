import React from "react";
import "./App.css";
import NavigationMenu from "./components/navigation";
import Macros from "./components/macros-calc";

function App() {
  return (
    <>
      <div className="navigation-side">
        <NavigationMenu />
        <Macros />
      </div>
    </>
  );
}

export default App;
