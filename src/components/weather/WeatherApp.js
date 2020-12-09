import React from "react";
import Weather from "./Weather";
import "./weather.css";

function WeatherApp() {
  return (
    <div className="weather">
      <h1>Weather App</h1>
      <Weather />
    </div>
  );
}

export default WeatherApp;
