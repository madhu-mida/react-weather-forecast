import React from "react";
import WeatherIcon from "./WeatherIcon"
import WeatherSubData from "./WeatherSubData"

const WeatherForecastComponent = (props) => {
    return (
        <div className="weather">
            <WeatherIcon
                key={`WeatherIcon-${props.indexProp}`}
                imgProp={props.imgProp}
            />
            <WeatherSubData
                key={`WeatherSubData-${props.indexProp}`}
                condtionsProp={props.condtionsProp}
                timeProp={props.timeProp}
            />

        </div>
    );
}

export default WeatherForecastComponent;