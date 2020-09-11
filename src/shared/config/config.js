import sky from "../../assets/img/svg/001-sky.svg";
import sun from "../../assets/img/svg/002-sun.svg";
import snow from "../../assets/img/svg/003-snow.svg";
import rain from "../../assets/img/svg/004-water.svg";
import storm from "../../assets/img/svg/005-rain.svg";
import skyNight from "../../assets/img/svg/001-sky-night.svg";
import rainNight from "../../assets/img/svg/003-rain-night.svg";
import stormNight from "../../assets/img/svg/004-rain-clouds-night.svg";
import night from "../../assets/img/svg/002-moon.svg";

export const config = {
    imgArr: [
        {
            dec: "Clouds",
            img: sky
        },
        {
            dec: "Clear",
            img: sun
        },
        {
            dec: "Snow",
            img: snow
        },
        {
            dec: "Rain",
            img: rain
        },
        {
            dec: "Thunderstorm",
            img: storm
        },
        {
            dec: "Thunderstorm",
            img: stormNight,
            at: 22
        },
        {
            dec: "Rain",
            img: rainNight,
            at: 22,
            from: 5
        },
        {
            dec: "Clouds",
            img: skyNight,
            at: 22,
            from: 5
        },
        {
            dec: "Clear",
            img: night,
            at: 22,
            from: 5
        }
    ],
    API_KEY: 'a5453c530d029c9500231fc1a65b49df',
    week: ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'],
    PREV: 'prev',
    NEXT :'next',
    interval: 332,
}

