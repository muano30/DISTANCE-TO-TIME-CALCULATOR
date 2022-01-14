
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [distance, setDistance] = useState("")
  const [timeList, setTimeList] = useState([])

  const calculateWalkingTime = (distance, speed = 3.6) => {
    return distance / speed
  }

  const calculateDrivingTime = (distance, speed = 50) => {
    if (speed <= 100) {
      return distance / speed
    } else {
      alert ("Driving Above Speed Limit")
    }
  }

  const calculateFlightTime = (distance, speed = 800) => {
    return distance / speed
  }

  const walkingTime = (decimalTimeString) => {
    var decimalTimeString = calculateWalkingTime(+distance);
    var decimalTime = parseFloat(decimalTimeString);
    decimalTime = decimalTime * 60 * 60;
    var hours = Math.floor((decimalTime / (60 * 60)));
    decimalTime = decimalTime - (hours * 60 * 60);
    var minutes = Math.floor((decimalTime / 60));
    decimalTime = decimalTime - (minutes * 60);
    var seconds = Math.round(decimalTime);
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return ("" + hours + ":" + minutes + ":" + seconds);
  }

  const drivingTime = (decimalTimeString) => {
    var decimalTimeString = calculateDrivingTime(+distance);
    var decimalTime = parseFloat(decimalTimeString);
    decimalTime = decimalTime * 60 * 60;
    var hours = Math.floor((decimalTime / (60 * 60)));
    decimalTime = decimalTime - (hours * 60 * 60);
    var minutes = Math.floor((decimalTime / 60));
    decimalTime = decimalTime - (minutes * 60);
    var seconds = Math.round(decimalTime);
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return ("" + hours + ":" + minutes + ":" + seconds);
  }

  const flightTime = (decimalTimeString) => {
    var decimalTimeString = calculateFlightTime(+distance);
    var decimalTime = parseFloat(decimalTimeString);
    decimalTime = decimalTime * 60 * 60;
    var hours = Math.floor((decimalTime / (60 * 60)));
    decimalTime = decimalTime - (hours * 60 * 60);
    var minutes = Math.floor((decimalTime / 60));
    decimalTime = decimalTime - (minutes * 60);
    var seconds = Math.round(decimalTime);
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return ("" + hours + ":" +  minutes + ":" + seconds);
  }

  const handleSubmit = (e) => {
    // console.log(e)
    // console.log("e.target[0].value" , e.target[0].value)
    e.preventDefault();
    let value = Number(e.target[0].value)
    // console.log('value', typeof value)
    if (!value) {

      return
    }
    // var caTime = Math.round(calculateWalkingTime(+value) * 100) / 100;
    // var caDrivingTime = Math.round(calculateDrivingTime(+value) * 100) / 100;
    // var caFlightTime = Math.round(calculateFlightTime(+value) * 100) / 100;
    // var toMin = caTime * 60;
    // var toDrivingMin = caDrivingTime * 60;
    // var toFlight = caFlightTime * 60;

    // console.log('caTime', caTime)
    // if(+walking <= 3.6){
    //   setTimeList([...timeList, calculateTime(+walking)])

    // }
    setDistance(value)
    setTimeList([walkingTime(+distance), drivingTime(+distance), flightTime(+distance)])

  }

  // console.log('timeList', timeList)
  return (
    <div className="App">
      <h1>DISTANCE TO TIME CALCULATOR</h1>

      <form onSubmit={handleSubmit}>
        <div className="kilometers">

          <input placeholder="Distance"
            type="number"
            name="walking"
            onChange={(e) => setDistance(e.target.value)}
            value={distance}
          ></input>
          <button type="submit">Get Time</button>
        </div>


      </form>
      {timeList.length >= 3 ?
        <li>
          <h3>WALKING TIME: {timeList[0]}</h3>
          <h3>DRIVING TIME: {timeList[1]}</h3>
          <h3>FLIGHT TIME: {timeList[2]}</h3>
        </li>
        : null}
    </div>
  );
}

export default App;
