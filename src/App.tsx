import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationMenu from "./components/navigation";
import { PieChartFilled } from "@ant-design/icons";
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
