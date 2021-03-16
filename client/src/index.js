import { render } from 'react-dom';
import React from 'react';
import App from './components/app';
import './css/style.css';

// async function getItems() {
//    const res = await fetch('http://localhost:5000/api');
//    const data = await res.json();
//    return data;
// }

// let items = [{ name: '', count: 0 }];

function generateUser() {
   return '_' + Math.random().toString(36).substr(2, 9);
}

let userID;
// if (localStorage.getItem(userID)) {
//    userID = localStorage.getItem(userID);
// } else {
//    userID = generateUser();
// }

console.log(generateUser());

render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById('root')
);
