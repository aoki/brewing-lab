import { Slider } from "@zeit-ui/react";
import { FC } from "react";

interface Props {
  value: number;
  onChangeValue: (next: number) => void;
  max: number;
  min: number;
}

const LinkSlider: FC<Props> = ({ value, max, min, onChangeValue }) => {
  console.log(`Render: LinkSlider ${value}`);

  return (
    <>
      <Slider value={value} max={max} min={min} onChange={onChangeValue} />
    </>
  );
};

export default LinkSlider;
