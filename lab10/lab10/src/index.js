import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About'
import Zad6 from './Zad6'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <About />
    <Zad6 />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
