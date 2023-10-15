import React from 'react';
import { createRoot} from 'react-dom/client';
import App from './App';
import MyProvider from './contextProvider.js'; 

const root = createRoot(document.getElementById('root'));

root.render(
  <MyProvider>
    <App />
  </MyProvider>
);
