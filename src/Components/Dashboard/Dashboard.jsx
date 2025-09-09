import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.removeItem("access_token");
    navigate("/");
  }

  // template lierer backticks
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

const [data, setData] = useState()

  async function getUserProfile() {
    debugger
    const getProfileResponse = await axios.get(
      "https://api.escuelajs.co/api/v1/auth/profile",
      config
    );

    const storeResponseData = await getProfileResponse.data.avatar;
    setData(storeResponseData)

    console.log("datadatadatadatadatadata", data)
  }
  return (
    <>
      <button onClick={handleLogOut}>Logout</button>
      <button onClick={getUserProfile}>Get UserProfile</button>

      <img src={data}/>
      <div>Dashboard</div>
    </>
  );
}




// API CALL --- RESPONSE --- STORE DATA DISPLAY -- AVATAR----

//                                                 USESTATE(VALUE, UPDATE FUNC )