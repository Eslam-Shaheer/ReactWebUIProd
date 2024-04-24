import React, { useId } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseByAmount,
  increment,
} from "../../store/slices/counterSlice";
import useCounter from "../../hooks/useCounter";

const CounterComponent = () => {
  const { counter, handleDecrement, handleIncrement } = useCounter();

  return (
    <div className="d-flex gap-2 p-2">
      <Button onClick={handleDecrement}>Decrement</Button>
      <div className="p-2">{counter}</div>
      <Button onClick={handleIncrement}>Increment</Button>
      {/* <Button onClick={handleIncreaseByValue}>handleIncreaseByValue</Button> */}
    </div>
  );
};

export default CounterComponent;
