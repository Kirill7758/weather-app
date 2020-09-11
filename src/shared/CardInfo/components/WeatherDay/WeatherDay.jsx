import React, {useEffect, useState} from "react";
import {config} from "../../../config/config";

const WeatherDay = ({coord, today}) => {
    const {lat, lon} = coord
    const {API_KEY, week, imgArr} = config

    const [days, setDays] = useState([])

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=Tus&appid=${API_KEY}`)
            .then(response => response.json())
            .then((data) => {
                const {daily} = data;
                const objDays = daily.map(({temp, weather}, idx) => {
                        return { temp, weather, day: week[idx] }
                }).filter((item, idx, arr) => idx !== arr.length - 1)
                setDays(objDays)
            })
            .catch(err => {
                console.log(err);
            });
    }, [lat, lon, API_KEY, week])

    const listDays = days.map(({temp, weather, day: dayWeek}, idx) => {
        const {day} = temp
        const [{main}] = weather
        const {img} = imgArr.find(({dec}) => dec === main) || {img: ''}
        const active = today === dayWeek ? 'active' : ''
        console.log(today, dayWeek)
        return(
            <div className={"weather-day " + active} key={'weather-day-' + idx}>
                <h3 className="day-title">{dayWeek}</h3>
                <img src={img} alt="" className="day-img"/>
                <span className="day-temperature card-temperature">{Math.floor(day - 273.15)}</span>
                <span className="day-weather">{main}</span>
            </div>
        )
    })
    console.log(listDays)
    return(
        <>
            {listDays}
        </>
    )
}

export default WeatherDay
