import { useState } from 'react'
import './App.css'
import React from 'react';
import BMICard from './bmi-card/bmi-card'

function App() {
  const  [list, setlist] = useState([]);  
  console.log(list)
  return (
    <div className="App">
       <div className="header"> 
              <h1 > BMI - Tracker  </h1>
              </div>
         Display Form here
        <div className='chart'>
        Display graph here
       </div>


       <h1>Last 7 BMI records </h1>
        <div>Cards here</div>
        <BMICard></BMICard>
        <BMICard></BMICard>
        <BMICard></BMICard>
    </div>
  )



}

export default App