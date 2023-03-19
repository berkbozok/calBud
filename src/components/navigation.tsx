import {
  CalculatorFilled,
  HeartFilled,
  PercentageOutlined,
  PieChartFilled,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
export type NavigationMenuProps = {};

const NavigationMenu = ({}: NavigationMenuProps) => {
  return (
    <>
      <div className="nav-bar">
        <div className="title">CalBud</div>
        <div className="nav-item-list">
          <a>
            <div className="items">
              <PieChartFilled className="icon" />
              Macros Cals
            </div>
          </a>
          <a>
            <div className="items">
              <CalculatorFilled className="icon" />
              BMI Calc
            </div>
          </a>
          <a>
            <div className="items">
              <PercentageOutlined className="icon" />
              Body Fat Calc
            </div>
          </a>
          <a>
            <div className="items">
              <HeartFilled className="icon" />
              Ideal Weight
            </div>
          </a>
        </div>
        <div className="button-div">
          <Button className="upgrade-button">Upgrade</Button>
        </div>
      </div>
    </>
  );
};

export default NavigationMenu;
