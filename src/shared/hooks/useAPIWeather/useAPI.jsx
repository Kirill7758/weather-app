import {useEffect} from 'react'

export const useAPI = (card, setObjCard) => {
    const API_KEY = 'a5453c530d029c9500231fc1a65b49df';
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${card}&appid=${API_KEY}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.cod <= 200) {
                    const {main, name, weather, wind, coord} = res
                    const {temp, temp_min, temp_max, pressure, humidity} = main;
                    const {speed} = wind
                    const [objWeather] = weather
                    const {main: description} = objWeather
                    const Temperature = Math.floor(temp - 273.15)
                    const TemperatureMin = Math.floor(temp_min - 273.15)
                    const TemperatureMax = Math.floor(temp_max - 273.15)
                    setObjCard({
                        name,
                        Temperature,
                        TemperatureMin,
                        TemperatureMax,
                        description,
                        speed,
                        pressure,
                        humidity,
                        coord,
                        capital: card.split(', ')[1]
                    })
                }
            })
            .catch((e) => console.log(e.message))
    }, [card, setObjCard])
}
