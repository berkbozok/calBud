import React, { useState } from "react";
import "../App.css";
import { PieChartFilled } from "@ant-design/icons";
import { Button, Radio, Slider } from "antd";

function Macros() {
  const [sliderValue1, setSliderValue1] = useState<number>(25);
  const [sliderValue2, setSliderValue2] = useState<number>(170);
  const [sliderValue3, setSliderValue3] = useState<number>(75);

  const onChange1 = (value: number | [number, number]) => {
    console.log("onChange: ", value);
    if (typeof value === "number") {
      setSliderValue1(value);
    }
  };

  const onAfterChange1 = (value: number | [number, number]) => {
    if (typeof value === "number") {
      setSliderValue1(value);
    }
  };

  const onChange2 = (value: number | [number, number]) => {
    console.log("onChange2: ", value);
    if (typeof value === "number") {
      setSliderValue2(value);
    }
  };

  const onAfterChange2 = (value: number | [number, number]) => {
    console.log("onAfterChange2: ", value);
    if (typeof value === "number") {
      setSliderValue2(value);
    }
  };

  const onChange3 = (value: number | [number, number]) => {
    console.log("onChange3: ", value);
    if (typeof value === "number") {
      setSliderValue3(value);
    }
  };

  const onAfterChange3 = (value: number | [number, number]) => {
    console.log("onAfterChange3: ", value);
    if (typeof value === "number") {
      setSliderValue3(value);
    }
  };
  return (
    <>
      <div className="page-layout">
        <div className="main-title">
          <PieChartFilled className="icon-title" />
          Macros Calculator
        </div>
        <div className="line"></div>
        <div className="main-page-layout">
          <div className="main-page">
            <h2>Calculate Your Macros</h2>
            <p>
              Craft your ideal macronutrient ratio now using our macros
              calculator
            </p>
            <div>
              <p>System</p>
              <Radio.Group>
                <Radio.Button value="horizontal">Imperial</Radio.Button>
                <Radio.Button value="vertical">Metric</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <p>I'm a</p>
              <Radio.Group>
                <Radio.Button value="horizontal">Male</Radio.Button>
                <Radio.Button value="vertical">Female</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <p>What is your main weight goal?</p>
              <Radio.Group>
                <Radio.Button value="horizontal">Lose</Radio.Button>
                <Radio.Button value="vertical">Maintain</Radio.Button>
                <Radio.Button value="vertical">Gain</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <p>
                I am <b>{sliderValue1}</b> years old
              </p>
              <Slider
                defaultValue={25}
                onChange={onChange1}
                onAfterChange={onAfterChange1}
              />
            </div>
            <div>
              <p>
                My Height: <b>{sliderValue2}</b> cm
              </p>
              <Slider
                min={0}
                max={250}
                defaultValue={170}
                onChange={onChange2}
                onAfterChange={onAfterChange2}
              />
            </div>
            <div>
              <p>
                Current Weight: <b>{sliderValue3}</b> kg
              </p>
              <Slider
                min={0}
                max={200}
                defaultValue={75}
                onChange={onChange3}
                onAfterChange={onAfterChange3}
              />
            </div>
            <div>
              <p>Activity Level</p>
              <Radio.Group>
                <Radio.Button value="horizontal">Sedentary</Radio.Button>
                <Radio.Button value="vertical">Moderate</Radio.Button>
                <Radio.Button value="vertical">Active</Radio.Button>
              </Radio.Group>
            </div>
            <div className="calculate-macros-div">
              <Button className="calculate-macros-button">
                Calculate Macros
              </Button>
            </div>
          </div>
          <div className="daily-macro-title">
            <h2>Your Daily Macro Goals</h2>
            <h3>Total 2300 kcal</h3>
            <h4>Daily Macros</h4>
            <div className="daily-macro-value">
              <div className="macro-value-div">75gr protein</div>
              <div className="macro-value-div">36gr carbs</div>
              <div className="macro-value-div">62gr fat</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Macros;
