import React, {useEffect} from "react";
import HeaderStart from "../HeaderStart";
import Switcher from "../Switcher";
import './css/Header.css';
import './css/HeaderLight.css';
import './css/HeaderDark.css';


const Header = ({theme, switcher, setSwitcher, setBurger, visible, setToday}) => {
    const date = new Date() + ''
    const [dayWeek, month, day, year] = date.split(' ')
    useEffect(() => {
        setToday(dayWeek)
    }, [dayWeek, setToday])
    return(
        <header className={"header " + theme}>
            <HeaderStart
                setBurger={setBurger}
                visible={visible}
                theme={theme}
            />
            <div className="date-block">
                <h1 className="date-title">{day} {month} {year}</h1>
            </div>
            <Switcher
                switcher={switcher}
                setSwitcher={setSwitcher}
                theme={theme}
            />
        </header>
    )
}

export default Header
