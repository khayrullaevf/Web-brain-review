import React from 'react';
import ReactDOM from 'react-dom/client';
import ME from './Me';
// import './me.css' ;

// import './index.css';
// import './myapp.css';

// import App from './App';
// import Me from './myapp.jsx';
// import ME from './Me';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ME/>
    {/* <App /> */}
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
