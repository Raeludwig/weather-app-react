import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f4cc82078e0999601d888c5956e645ef`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
       type="text" />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp} °F</h1> : null}
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p>Feels Like</p> 
            <p className="bold">
            {data.main ? <h1>{data.main.feels_like} </h1> : null}
              </p>
           
          </div>
          <div className="humidity">
            <p>Humidity</p>
            <p className="bold">
            {data.main ? <h1>{data.main.humidity} % </h1> : null}
            </p>
          </div>
          <div className="wind">
            <p>Wind Speed</p>
            <p className="bold">
            {data.wind ? <h1>{data.wind.speed} MPH</h1> : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
