import { Input } from "@zeit-ui/react";
import { FC, memo, useEffect, useState } from "react";

interface Props {
  value: number;
  onChangeValue: (next: number) => void;
  max: number;
  min: number;
}

const LinkInput: FC<Props> = ({ value, max, min, onChangeValue }) => {
  console.log(`Render: LinkInput ${value}`);
  const [_value, setValue] = useState<string>(value.toString());

  useEffect(() => {
    setValue(value.toString());
  }, [value, _value]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const next = event.currentTarget.value;
    setValue(next);

    const nextNumber = parseFloat(next);
    onChangeValue(nextNumber);
  };

  return (
    <>
      <Input value={_value} max={max} min={min} onChange={handleChange} />
    </>
  );
};

export default memo(LinkInput);
