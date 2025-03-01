import { useState } from 'react';

export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);

  const set = (value: boolean) => setValue(value);

  return { value, toggle, set };
}
