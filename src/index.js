import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/index.css';
import '../src/style/responsive.css'
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { AuthProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
