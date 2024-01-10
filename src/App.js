import React from 'react';
import './App.css';
import {add, sub, mul, div} from './Calculator';

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().getHours();
let str = '';
function App() {
  if(currentTime < 11){
    str = "Good Morning";
  }else if(currentTime < 15){
    str = "Good Afternoon";
  }else if(currentTime < 18){
    str = "Good Noon";
  }else{
    str = "Good Night";
  }
  return (
    <div >
      
        <h2 className="text-h2">
         {str} !
        </h2>
        <p>Sum is {add(10,5)}</p>
        <p>Sub is {sub(10,5)}</p>
        <p>Mul is {mul(10,5)}</p>
        <p>Div is {div(137,4)}</p>
    </div>

  );
}

export default App;
