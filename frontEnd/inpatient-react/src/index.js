import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppBar from './navbar';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <div>
    <AppBar/>

    <App />
  </div>
    ,document.getElementById('root'));
registerServiceWorker();
