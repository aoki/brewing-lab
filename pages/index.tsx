import { NextPage } from "next";
import React, { useState, useCallback, useEffect } from "react";
import { Slider, Text, Input, Spacer, Button } from "@zeit-ui/react";
import LinkSlider from "../components/link-slider";
import LinkInput from "../components/link-input";

// interface Degree {
//   celsius: number;
//   fahrenheit: number;
// }

interface Props {}

const IndexPage: NextPage<Props> = () => {
  const [temperature, setTemperature] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number>(32);

  // useEffect(() => {
  //   setFahrenheit(Math.round(((9 / 5) * temperature + 32) * 100) / 100);
  // }, [temperature]);

  // useEffect(() => {
  //   setTemperature((Math.round((5 / 9) * (fahrenheit - 32)) * 100) / 100);
  // }, [fahrenheit]);

  const [count, setCount] = useState<number>(0);

  console.log(`Render: IndexPage ${count}`);

  const temperatureChangeValueHandler = useCallback((next: number) => {
    setTemperature(next);
    setFahrenheit(Math.round(((9 / 5) * next + 32) * 100) / 100);
  }, []);

  const fahrenheitChangeValueHandler = useCallback((next: number) => {
    setFahrenheit(next);
    setTemperature((Math.round((5 / 9) * (next - 32)) * 100) / 100);
  }, []);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className="main">
      <div className="contents">
        <Text>{count}</Text>
        <Spacer y={1} />
        <Button onClick={countHandler}> Count +1</Button>

        <Spacer y={2} />
        <Text>Celsius: {temperature}</Text>

        <Spacer y={1} />
        <LinkSlider
          value={temperature}
          onChangeValue={temperatureChangeValueHandler}
          max={100}
          min={0}
        />
        <Spacer y={1} />
        <LinkInput
          value={temperature}
          onChangeValue={temperatureChangeValueHandler}
          max={100}
          min={0}
        />

        <Spacer y={2} />

        <Text>Fahrenheit: {fahrenheit}</Text>
        <LinkSlider
          value={fahrenheit}
          onChangeValue={fahrenheitChangeValueHandler}
          max={212}
          min={32}
        />
        <Spacer y={1} />
        <LinkInput
          value={fahrenheit}
          onChangeValue={fahrenheitChangeValueHandler}
          max={212}
          min={32}
        />
      </div>
      <style jsx>{`
        .contents {
          width: 50%;
        }
        .main {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
