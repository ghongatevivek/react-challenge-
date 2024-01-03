import React from 'react';
import './App.css';

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
         {str} ! {currentTime}
        </h2>
    </div>

  );
}

export default App;
