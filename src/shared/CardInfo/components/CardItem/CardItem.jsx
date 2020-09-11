import React from "react";
import WeatherDay from "../WeatherDay";
import WeatherInfo from "../WeatherInfo";

const CardItem = (props) => {
    const {coord, today} = props
    return(
        <div className="card">
            <WeatherInfo info={props}/>
            <div className="weather-days">
                <WeatherDay coord={coord} today={today}/>
            </div>
        </div>
    )
}

export default CardItem
