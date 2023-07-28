import React, {useState} from "react";
import axios from "axios";

function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=f4cc82078e0999601d888c5956e645ef`


  return (
    <div className="app">
  <div className="container">

    <div className="top">
      <div className="location">
        <p>Dallas</p>
      </div>
      <div className="temp">
        <h1>65 Degrees</h1>
      </div>
      <div className="desc">
        <p>Clouds</p>
      </div>
    </div>

<div className="bottom">
  <div className="feels">
    <p>65 Degrees</p>
  </div>
  <div className="humidity">
    <p>20%</p>
  </div>
  <div className="wind">
    12MPH
  </div>
</div>
  </div>
    </div>
  );
}

export default App;
