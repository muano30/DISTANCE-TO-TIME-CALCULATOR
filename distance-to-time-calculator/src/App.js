
import logo from './logo.svg';
import './App.css';
// import React from 'react';
import React, { useState } from 'react';

function App() {
  const [walking,  setWalking] = useState(
    {
walking: "",
driving: "",
flight: ""
})
  const [timeList, setTimeList] = useState([])

const calculateWalkingTime = (distance, speed = 3.6) => {
return distance / speed
}

const calculateDrivingTime = (distance, speed = 50) => {
  if(distance <= 100){
    return distance / speed
  }
}

const calculateFlightTime = (distance, speed = 80) => {
  return distance / speed
}

const handleSubmit = (e) => {
  // console.log(e)
  e.preventDefault();
  let value = e.target[0].value
  console.log(e.target[0].value)
  if(!value) {

    return
  }else{
    var caTime = Math.round(calculateWalkingTime(+value) * 100) / 100;
    var caDrivingTime = Math.round(calculateDrivingTime(+value) * 100) / 100;
    var caFlightTime = Math.round(calculateFlightTime(+value) * 100) / 100;
    var toMin = caTime * 60;
    var toDrivingMin = caDrivingTime * 60;
    var toFlight = caFlightTime * 60;

    console.log('caTime', caTime)
    // if(+walking <= 3.6){
      //   setTimeList([...timeList, calculateTime(+walking)])
      
      // }
      setTimeList([caTime, caDrivingTime, caFlightTime])
      setWalking(value)
    }
  }
  
  console.log('timeList', timeList)
  return (
    <div className="App">
<h1>Distance to Time Calculator</h1>

<form onSubmit={handleSubmit}>
  <div className="kilometers">

<input  placeholder="Distance"
type="number"
name="walking"
onChange={(e) =>  setWalking(e.target.value.name)}
value={walking}
></input>
<button type="submit">submit</button>
  </div>


</form>
      {timeList.length >= 3?
      <li>
        <h3>WALKING TIME: {timeList[0]}</h3>
        <h3>DRIVING TIME: {timeList[1]}</h3>
        <h3>FLIGHT TIME: {timeList[2]}</h3>
      </li>
       :null} 
       </div>
  );
}

export default App;
