import React from 'react';
import ReactDOM from 'react-dom/client';
import Alert from "./Components/Alert";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Alert type="warning" text="what is love?" />
  </React.StrictMode>
);