import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  buyCakeIncreaseAction,
  ReturnCakeAction,
} from "../redux/Cakes/CakeActions";

export const CakeConditer = () => {
  const dispatch = useDispatch();

  const { numOfCakes } = useSelector((state) => {
    return state.Cake;
  });

  // console.log(numOfCakes, "numOfCakesnumOfCakesnumOfCakes");

  const handleBuyCake = () => {
    dispatch(buyCakeIncreaseAction());
  };

  const handleReturnCake = () => {
    dispatch(ReturnCakeAction());
  };

  return (
    <div>
      <h2>Number of cakes : {numOfCakes} </h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <button onClick={() => handleBuyCake()}>Buy Cake </button>
        </div>
        <div>
          <button onClick={() => handleReturnCake()}>Return Cake </button>
        </div>
      </div>
    </div>
  );
};
