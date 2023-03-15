import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationMenu from "./components/navigation";

function App() {
  return (
    <>
      <div className="navigation-side">
        <NavigationMenu />
        <div className="App">MAIN PAGE</div>
      </div>
    </>
  );
}

export default App;
