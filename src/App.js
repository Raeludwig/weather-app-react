import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  // const [weatherData] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=f4cc82078e0999601d888c5956e645ef`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  const getWeatherType = () => {
    if (!data || !data.weather || !Array.isArray(data.weather) || data.weather.length === 0) {
      return "default";
    }

    // Here you can determine the weather type based on the weather data
    const weatherType = data.weather[0].main.toLowerCase();

    // Return the weather type, e.g., 'clear', 'rainy', 'cloudy', etc.
    return weatherType;
  };

  return (
    <div className={`app ${getWeatherType()}`}>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} °F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              <p>Feels Like</p>
                {data.main ? <p className="bold">{data.main.feels_like.toFixed()} </p> : null}
            </div>
            <div className="humidity">
              <p>Humidity</p>
                            {data.main ? <p className="bold">{data.main.humidity.toFixed()} % </p> : null}
            
            </div>
            <div className="wind">
              <p >Wind Speed</p>
              {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null} 
              <div className={`background-image ${getWeatherType()}`} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
