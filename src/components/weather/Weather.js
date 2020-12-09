import React, { useState } from "react";
import weatherAPI from "../../apis/OpenWeather.instance";
import axios from "axios";
// import "./WidgetStyle.css";

function Weather() {
  //References

  //States
  const [currentWeather, setCurrentWeather] = useState("");
  const [city, setCity] = useState("");

  const getWeather = () => {
    axios
      .get(weatherAPI.url + `&q=${city}`)
      .then((response) => {
        console.log(response);
        setCurrentWeather(response.data.main.temp);
      })
      .catch((error) => {
        setCurrentWeather(error.response.data.message);
      });
  };
  const setCityHandler = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="container">
      <div className="weather-side">
        <div className="weather-gradient"></div>
        <div className="date-container">
          <h2 className="date-dayname">
            Monday
            <span className="date-day">1 Jan 2019</span>
          </h2>
          <i className="location-icon" data-feather="map-pin"></i>
          <span className="location">Paris FR</span>
        </div>
        <div className="weather-container">
          <i className="weather-icon" data-feather="sun"></i>
          <h1 className="weather-temp">100&#176;</h1>
          <h2 className="weather-desc">Sunny</h2>
        </div>
      </div>
      <div className="info-side">
        <div className="today-info">
          <div className="precipitation">
            <span className="title">Precipitation</span>
            <span className="value">0 %</span>
          </div>
          <div className="clear" />
          <div className="humidity">
            <span className="title">Humidity</span>
            <span className="value">14 %</span>
          </div>
          <div className="clear" />
          <div className="wind">
            <span className="title">Wind</span>
            <span className="value">0 m/h</span>
          </div>
          <div className="clear" />
        </div>
        <ul className="week-list">
          <li className="active">
            <i className="day-icon" data-feather="sun" />
            <span className="day-name">Tues</span>
            <span className="day-temp">200&#176;</span>
          </li>
          <li>
            <i className="day-icon" data-feather="sun" />
            <span className="day-name">Tues</span>
            <span className="day-temp">200&#176;</span>
          </li>
          <li>
            <i className="day-icon" data-feather="sun" />
            <span className="day-name">Tues</span>
            <span className="day-temp">200&#176;</span>
          </li>
          <li>
            <i className="day-icon" data-feather="sun" />
            <span className="day-name">Tues</span>
            <span className="day-temp">200&#176;</span>
          </li>
          <div className="clear" />
        </ul>
        <button className="location-button">
          <i className="feather"> Change Location</i>
        </button>
      </div>
    </div>
  );
}

export default Weather;
