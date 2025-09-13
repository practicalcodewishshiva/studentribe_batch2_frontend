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
        <h2>📋 Assignment: Fix Your Dashboard</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h4>🔧 Problem 1: Loading States</h4>
            <p>Add proper loading indicators</p>
            <div className="code-snippet">
              <code>const [loading, setLoading] = useState(false);</code>
            </div>
          </div>
          
          <div className="problem-card">
            <h4>🛡️ Problem 2: Error Handling</h4>
            <p>Handle API failures gracefully</p>
            <div className="code-snippet">
              <code>try { /* API call */ } catch (err) { /* handle error */ }</code>
            </div>
          </div>
          
          <div className="problem-card">
            <h4>🧹 Problem 3: Cleanup</h4>
            <p>Prevent memory leaks</p>
            <div className="code-snippet">
              <code>return () =&gt; { /* cleanup */ };</code>
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
