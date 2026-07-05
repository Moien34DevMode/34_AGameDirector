import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@styles/global.css';

// ─────────────────────────────────────────────────────────────────────────────
// Entry point — mounts the React application into #root.
//
// StrictMode is enabled in development to surface potential issues early.
// It renders components twice in development only (not in production).
// ─────────────────────────────────────────────────────────────────────────────

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
