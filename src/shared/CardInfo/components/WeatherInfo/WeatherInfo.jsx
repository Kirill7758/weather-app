import React from "react";

const WeatherInfo = ({info}) => {
    const {
        name,
        Temperature,
        description,
        speed,
        humidity,
        capital
    } = info
    return(
        <div className="weather-info">
            <div className="weather-block">
                <h3 className="weather-temperature card-temperature">{Temperature}</h3>
                <span className="weather card-weather-title">{description}</span>
                <div className="weather-character">
                    <div className="weather-humidity">
                        <span className="humidity">Humidity</span>
                        <span className="humidity-number">{humidity} %</span>
                    </div>
                    <div className="weather-wind">
                        <span className="wind">Wind</span>
                        <span className="wind-number">{speed} k/m</span>
                    </div>
                </div>
            </div>
            <div className="city-block">
                <h3 className="weather-city-title">{name}, {capital}</h3>
            </div>
        </div>
    )
}

export default WeatherInfo
