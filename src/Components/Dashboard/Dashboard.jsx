import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Holdings from "../Holdings/Holdings";
import Counter from "../Counter/Counter";
import { AuthUserCredentials } from "../ContextAPI/AuthUserCredentials";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const name = useContext(AuthUserCredentials);
  const countValue = useSelector((globalState) => globalState.counter.price);

  console.log("count Value", countValue);
  return (
    <>
      Name{countValue}
      {/* <Holdings/> */}
      <Counter />
    </>
  );
}
