import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  function handleLogOut() {
    localStorage.removeItem("access_token");
    navigate("/");
  }

  async function getUserProfile() {
    console.log("🚀 MOUNTING/UPDATING: Getting profile...");
    
    try {
      setLoading(true);
      setError(null);
      
      const getProfileResponse = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        config
      );

      const storeResponseData = getProfileResponse.data.avatar;
      setData(storeResponseData);
      console.log("✅ Profile loaded successfully!");
      
    } catch (err) {
      console.log("❌ Failed to load profile:", err);
      setError("Failed to load profile picture");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("🎬 MOUNTING: Dashboard started");
    getUserProfile();
    
    return () => {
      console.log("💀 UNMOUNTING: Dashboard cleanup");
    };
  }, []);

  useEffect(() => {
    if (loading) {
      console.log("🔄 UPDATING: Started loading...");
    } else {
      console.log("✅ UPDATING: Finished loading!");
    }
  }, [loading]);

  useEffect(() => {
    if (data) {
      console.log("🎉 UPDATING: New data received!");
    }
  }, [data]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>📊 Dashboard</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={handleLogOut}
          style={{
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: '#dc3545',
            color: 'white'
          }}
        >
          🚪 Logout
        </button>
        <button 
          onClick={getUserProfile}
          disabled={loading}
          style={{
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer',
            backgroundColor: loading ? '#e9ecef' : '#007bff',
            color: loading ? '#6c757d' : 'white'
          }}
        >
          {loading ? '⏳ Loading...' : '🔄 Refresh Profile'}
        </button>
        <button 
          onClick={() => navigate('/lifecycle')}
          style={{
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: '#28a745',
            color: 'white'
          }}
        >
          📚 Learn Lifecycle
        </button>
      </div>

      {loading && <p>⏳ Loading your picture...</p>}
      {error && <p style={{ color: 'red' }}>❌ {error}</p>}
      {data && !loading && !error && (
        <div style={{ textAlign: 'center' }}>
          <p>✅ Here's your profile picture:</p>
          <img 
            src={data} 
            alt="Profile" 
            style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%',
              border: '3px solid #3498db',
              margin: '10px'
            }} 
          />
        </div>
      )}
    </div>
  );
}




// API CALL --- RESPONSE --- STORE DATA DISPLAY -- AVATAR----

//                                                 USESTATE(VALUE, UPDATE FUNC )