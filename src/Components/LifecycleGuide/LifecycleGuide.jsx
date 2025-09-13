import React, { useState, useEffect } from 'react';
import './LifecycleGuide.css';

export default function LifecycleGuide() {
  const [activeDemo, setActiveDemo] = useState('mounting');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [logs, setLogs] = useState([]);

  const addLog = (message, type = 'info') => {
    setLogs(prev => [...prev, { message, type, timestamp: new Date().toLocaleTimeString() }]);
  };

  const simulateApiCall = async () => {
    setLoading(true);
    setError(null);
    addLog('🚀 MOUNTING/UPDATING: Getting profile...', 'info');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setData('https://via.placeholder.com/150/3498db/ffffff?text=JD');
      addLog('✅ Profile loaded successfully!', 'success');
    } catch (err) {
      setError('Failed to load profile picture');
      addLog('❌ Failed to load profile: ' + err.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    addLog('🎬 MOUNTING: Lifecycle Guide started', 'info');
    
    return () => {
      addLog('💀 UNMOUNTING: Lifecycle Guide cleanup', 'info');
    };
  }, []);

  useEffect(() => {
    if (loading) {
      addLog('🔄 UPDATING: Started loading...', 'info');
    } else {
      addLog('✅ UPDATING: Finished loading!', 'success');
    }
  }, [loading]);

  useEffect(() => {
    if (data) {
      addLog('🎉 UPDATING: New data received!', 'success');
    }
  }, [data]);

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="lifecycle-container">
      <div className="header">
        <h1>🔄 React Lifecycle with Live Demos</h1>
      </div>

      <div className="flow-diagram">
        <h2>🔄 Complete Component Lifecycle</h2>
        <div className="flow-steps">
          <div className={`flow-step ${activeDemo === 'mounting' ? 'active' : ''}`} onClick={() => setActiveDemo('mounting')}>
            <div className="step-icon">👶</div>
            <h4>MOUNTING</h4>
            <p>Component Born</p>
          </div>
          <div className={`flow-step ${activeDemo === 'updating' ? 'active' : ''}`} onClick={() => setActiveDemo('updating')}>
            <div className="step-icon">🧑</div>
            <h4>UPDATING</h4>
            <p>Component Changes</p>
          </div>
          <div className={`flow-step ${activeDemo === 'unmounting' ? 'active' : ''}`} onClick={() => setActiveDemo('unmounting')}>
            <div className="step-icon">💀</div>
            <h4>UNMOUNTING</h4>
            <p>Component Dies</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <div className="demo-controls">
          <h3>🎮 Interactive Demo</h3>
          <div className="button-group">
            <button 
              className={`button ${loading ? 'btn-disabled' : 'btn-primary'}`}
              onClick={simulateApiCall}
              disabled={loading}
            >
              {loading ? '⏳ Loading...' : '🔄 Simulate API Call'}
            </button>
            <button className="button btn-secondary" onClick={clearLogs}>
              🗑️ Clear Logs
            </button>
          </div>
        </div>

        <div className="demo-content">
          <div className="visual-demo">
            <div className="code-section">
              <h3>📝 Current State</h3>
              <div className="state-display">
                <div className="state-item">
                  <span className="state-label">Loading:</span>
                  <span className={`state-value ${loading ? 'loading' : 'idle'}`}>
                    {loading ? 'true' : 'false'}
                  </span>
                </div>
                <div className="state-item">
                  <span className="state-label">Error:</span>
                  <span className={`state-value ${error ? 'error' : 'success'}`}>
                    {error || 'null'}
                  </span>
                </div>
                <div className="state-item">
                  <span className="state-label">Data:</span>
                  <span className={`state-value ${data ? 'success' : 'idle'}`}>
                    {data ? 'Profile Image URL' : 'null'}
                  </span>
                </div>
              </div>
            </div>

            <div className="screenshot-section">
              <h3>🖥️ What User Sees</h3>
              <div className="mock-browser">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                  </div>
                  <div className="url-bar">localhost:4000/lifecycle</div>
                </div>
                <div className="browser-content">
                  <h3>📊 Dashboard Demo</h3>
                  
                  {loading && (
                    <div className="loading-state">
                      <div className="loading-spinner"></div>
                      <p>⏳ Loading your picture...</p>
                    </div>
                  )}
                  
                  {error && (
                    <div className="error-message">
                      ❌ {error}
                      <button className="button btn-success" onClick={simulateApiCall}>
                        🔄 Try Again
                      </button>
                    </div>
                  )}
                  
                  {data && !loading && !error && (
                    <div className="success-content">
                      <p>✅ Here's your profile picture:</p>
                      <div className="profile-image">JD</div>
                      <p>John Doe</p>
                    </div>
                  )}
                  
                  {!data && !loading && !error && (
                    <div className="idle-state">
                      <p>👆 Click "Simulate API Call" to see lifecycle in action!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="logs-section">
        <h3>📋 Console Logs (Real-time)</h3>
        <div className="logs-container">
          {logs.length === 0 ? (
            <p className="no-logs">No logs yet. Interact with the demo above!</p>
          ) : (
            logs.map((log, index) => (
              <div key={index} className={`log-entry ${log.type}`}>
                <span className="log-time">[{log.timestamp}]</span>
                <span className="log-message">{log.message}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="assignment-section">
        <h2>📋 Assignment: Fix Your Dashboard Step by Step</h2>
        <p>See the visual difference before and after each fix!</p>
        
        <div className="problem-section">
          <h3>🔧 Problem 1: Add Loading State</h3>
          
          <div className="code-exercise">
            <h4>📝 Fill in the blanks:</h4>
            <div className="code-snippet">
              <pre>{`const [data, setData] = useState(???); // null or ""?
const [loading, setLoading] = useState(???); // true or false?

async function getUserProfile() {
  setLoading(???); // Start loading
  // API call here
  setLoading(???); // End loading
}`}</pre>
            </div>
          </div>

          <div className="before-after-demo">
            <div className="before-demo">
              <h4>❌ Before Fix</h4>
              <div className="mock-browser">
                <div className="browser-content">
                  <h3>📊 Dashboard</h3>
                  <div className="broken-image">❌ Broken</div>
                </div>
              </div>
            </div>
            
            <div className="after-demo">
              <h4>✅ After Fix</h4>
              <div className="mock-browser">
                <div className="browser-content">
                  <h3>📊 Dashboard</h3>
                  <div className="loading-spinner"></div>
                  <p>⏳ Loading...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="problem-section">
          <h3>🛡️ Problem 2: Add Error Handling</h3>
          
          <div className="code-exercise">
            <h4>📝 What happens when internet fails?</h4>
            <div className="code-snippet">
              <pre>{`const [error, setError] = useState(???); // What should error start with?

try {
  // API call
} catch (err) {
  setError(???); // What message to show?
}`}</pre>
            </div>
          </div>

          <div className="before-after-demo">
            <div className="before-demo">
              <h4>❌ App Crashes</h4>
              <div className="mock-browser">
                <div className="browser-content">
                  <h3>📊 Dashboard</h3>
                  <div className="error-crash">
                    <h4>💥 Unhandled Error</h4>
                    <p>TypeError: Cannot read properties of undefined</p>
                    <p>App stopped working completely! 😞</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="after-demo">
              <h4>✅ Graceful Error</h4>
              <div className="mock-browser">
                <div className="browser-content">
                  <h3>📊 Dashboard</h3>
                  <div className="error-message">
                    ❌ Failed to load profile picture
                    <button className="button btn-success">🔄 Try Again</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="problem-section">
          <h3>⏰ Problem 3: Cleanup Timers</h3>
          
          <div className="code-exercise">
            <h4>📝 Prevent memory leaks:</h4>
            <div className="code-snippet">
              <pre>{`useEffect(() => {
  let timer = setInterval(() => {
    console.log("Timer running...");
  }, 1000);

  return () => {
    clearInterval(???); // What goes here?
  };
}, []);`}</pre>
            </div>
          </div>

          <div className="before-after-demo">
            <div className="before-demo">
              <h4>❌ Without Cleanup</h4>
              <div className="console-logs">
                <div>Timer running...</div>
                <div>Timer running...</div>
                <div className="error-text">User navigates away</div>
                <div className="error-text">Timer running... ← Still running! Memory leak!</div>
                <div className="error-text">Timer running... ← Wasting resources!</div>
              </div>
            </div>
            
            <div className="after-demo">
              <h4>✅ With Cleanup</h4>
              <div className="console-logs">
                <div>Timer running...</div>
                <div>Timer running...</div>
                <div className="success-text">User navigates away</div>
                <div className="success-text">💀 Cleanup function runs</div>
                <div className="success-text">✅ Timer stopped! No memory leak!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="complete-solution-section">
        <div className="phase-header">
          <div className="phase-icon">🎯</div>
          <div className="phase-title">
            <h2>Complete Solution - Professional Dashboard</h2>
            <p>Your fixed Dashboard with all lifecycle phases handled properly</p>
          </div>
        </div>

        <div className="code-section">
          <h3>🎉 Final Professional Code</h3>
          <pre>{`import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  
  // ✅ Fixed: Proper initial states
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const config = {
    headers: { Authorization: \`Bearer \${access_token}\` }
  };

  async function getUserProfile() {
    console.log("🚀 MOUNTING/UPDATING: Getting profile...");
    
    try {
      // ✅ Fixed: Proper loading states
      setLoading(true);
      setError(null);
      
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        config
      );
      
      setData(response.data.avatar);
      console.log("✅ Profile loaded successfully!");
      
    } catch (err) {
      // ✅ Fixed: Proper error handling
      console.log("❌ Failed to load profile:", err);
      setError("Failed to load profile picture");
    } finally {
      setLoading(false);
    }
  }

  // ✅ MOUNTING: Load data when component appears
  useEffect(() => {
    console.log("🎬 MOUNTING: Dashboard started");
    getUserProfile();
    
    // ✅ UNMOUNTING: Cleanup when component dies
    return () => {
      console.log("💀 UNMOUNTING: Dashboard cleanup");
    };
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>📊 Dashboard</h1>
      
      {/* ✅ Fixed: Proper button states */}
      <button onClick={handleLogOut}>🚪 Logout</button>
      <button 
        onClick={getUserProfile}
        disabled={loading}
      >
        {loading ? '⏳ Loading...' : '🔄 Refresh Profile'}
      </button>

      {/* ✅ Fixed: Conditional rendering */}
      {loading && <p>⏳ Loading your picture...</p>}
      {error && <p style={{ color: 'red' }}>❌ {error}</p>}
      {data && !loading && !error && (
        <img src={data} width="150" height="150" />
      )}
    </div>
  );
}`}</pre>
        </div>

        <div className="final-result-demo">
          <h3>🎬 Final Result - Professional Dashboard</h3>
          <div className="mock-browser">
            <div className="browser-bar">
              <div className="browser-dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="url-bar">localhost:4000/dashboard</div>
            </div>
            <div className="browser-content">
              <h2>📊 Dashboard</h2>
              
              <div className="button-group">
                <button className="button btn-danger">🚪 Logout</button>
                <button className="button btn-primary">🔄 Refresh Profile</button>
              </div>
              
              <div className="success-content">
                <div className="success-box">
                  <p>✅ Here's your profile picture:</p>
                  <div className="profile-image">JD</div>
                  <p>John Doe</p>
                  <p>Profile loaded successfully!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="summary-section">
        <h2>🎉 Congratulations!</h2>
        <p>You've learned all React lifecycle phases with interactive examples!</p>
        
        <div className="achievement-grid">
          <div className="achievement">
            <div className="achievement-icon">👶</div>
            <h4>MOUNTING</h4>
            <p>Component appears<br/>Perfect for API calls</p>
          </div>
          
          <div className="achievement">
            <div className="achievement-icon">🧑</div>
            <h4>UPDATING</h4>
            <p>State/props change<br/>React to changes</p>
          </div>
          
          <div className="achievement">
            <div className="achievement-icon">💀</div>
            <h4>UNMOUNTING</h4>
            <p>Component leaves<br/>Clean up resources</p>
          </div>
        </div>
        
        <div className="checklist">
          <h3>✅ Your Dashboard Should Have:</h3>
          <ul>
            <li>✅ Proper loading states</li>
            <li>✅ Error handling</li>
            <li>✅ Memory leak prevention</li>
            <li>✅ Professional user experience</li>
          </ul>
        </div>
        
        <p className="final-message">🚀 You're now a React Lifecycle Pro!</p>
      </div>
    </div>
  );
}
