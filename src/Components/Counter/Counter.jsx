import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  globalCounterIncrease,
  globalCounterDecrease,
} from "../../features/counter/counterSlice";

export default function Counter() {
  const [price, incresePrice] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleIncrement() {
    incresePrice((prevprice) => {
      return prevprice + 1;
    });
  }

  function globalHandleIncrement() {
    dispatch(globalCounterIncrease(100));
  }

  function reduxDecrement() {
    dispatch(globalCounterDecrease(50));
  }

  return (
    <>
      Price {price}
      <button onClick={globalHandleIncrement}>Increment</button>
      <button onClick={reduxDecrement}>Decrement</button>
      {/* <button onClick={resetPrice}>Reset</button> */}
    </>
  );
}

// Statement 3 buttons
// increment +1 0 1 2 3 4 5
// decrement. 0 -1 -2-3-45
// reset.   0
