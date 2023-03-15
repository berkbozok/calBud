import React from "react";
// import "./App.css";

export type NavigationMenuProps = {};

const NavigationMenu = ({}: NavigationMenuProps) => {
  return (
    <>
      <div className="nav-bar">
        <div className="title">CalBud</div>
        <div className="nav-item-list">
          <a>
            <div className="items">Macros Cals</div>
          </a>
          <a>
            <div className="items">BMI Calc</div>
          </a>
          <a>
            <div className="items">Body Fat Calc</div>
          </a>
          <a>
            <div className="items">Ideal Weight</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavigationMenu;
