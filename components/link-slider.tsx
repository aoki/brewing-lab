import { Slider } from "@zeit-ui/react";
import { FC, useState } from "react";

interface Props {
  value: number;
  onChangeValue: (next: number) => void;
  max: number;
  min: number;
}

const LinkSlider: FC<Props> = ({ value, max, min, onChangeValue }) => {
  console.log(`Render: LinkSlider ${value}`);
  const [_value, setValue] = useState<string>(value.toString());

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const next = event.currentTarget.value;
    setValue(next);

    const nextNumber = parseFloat(next);
    onChangeValue(nextNumber);
  };

  return (
    <>
      <input
        type="range"
        value={value}
        max={max}
        min={min}
        onChange={handleChange}
      />
      {/* <Slider value={value} max={max} min={min} onChange={onChangeValue} /> */}
    </>
  );
};

export default LinkSlider;
