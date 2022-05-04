import React from "react";

const WeatherSubData = (props) => {
    return (
        <>
            <p><span>conditions:</span> {props.condtionsProp}</p>
            <p><span>time:</span> {props.timeProp}</p>
        </>
    );
}

export default WeatherSubData