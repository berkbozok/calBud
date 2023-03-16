import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationMenu from "./components/navigation";
import { PieChartFilled } from "@ant-design/icons";

function App() {
  return (
    <>
      <div className="navigation-side">
        <NavigationMenu />
        <div className="page-layout">
          <div className="main-title">
            <PieChartFilled className="icon-title" />
            Macros Calculator
          </div>
          <div className="line"></div>
          <div className="main-page">
            <h2>Calculate Your Macros</h2>
            <p>
              Craft your ideal macronutrient ratio now using our macros
              calculator
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
