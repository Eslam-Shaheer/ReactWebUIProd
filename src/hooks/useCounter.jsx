import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseByAmount,
  increment,
} from "../store/slices/counterSlice";

const useCounter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleIncreaseByValue = () => {
    dispatch(increaseByAmount(10));
  };

  return { handleDecrement, handleIncrement, handleIncreaseByValue, counter };
};

export default useCounter;
