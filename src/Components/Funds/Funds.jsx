import React from "react";

import { AuthUserCredentials } from "../ContextAPI/AuthUserCredentials";
import { useContext } from "react";
export default function Funds() {
  const name = useContext(AuthUserCredentials);
  return (
    <div>
      Funds
      {name}
    </div>
  );
}
