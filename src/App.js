import React from "react";
import "./styles.css";
import { weatherData } from "./weatherData";
import WeatherForecastComponent from "./WeatherForecast"

export default function App() {
  console.log(weatherData)
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      {weatherData.map((element, index) => {
        return (
          <WeatherForecastComponent
            key={`Weather-${index}`}
            indexProp={index}
            imgProp={element.img}
            condionsProp={element.conditions}
            timeProp={element.time}

          />
        );
      })}
    </div>
  );
}
