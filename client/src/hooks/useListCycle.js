import { useState } from 'react';

const useListCycle = arr => {
  const [current, setCurrent] = useState(0);
  const increment = () => {
    const next = current + 1;
    if (next < arr.length) setCurrent(next);
  };
  const decrement = () => {
    const prev = current - 1;
    if (prev >= 0) setCurrent(prev);
  };

  return {
    current: arr[current],
    hasNext: current < arr.length - 1,
    hasPrev: current > 0,
    increment,
    decrement
  };
};

export default useListCycle;
