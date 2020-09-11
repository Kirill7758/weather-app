import React, {useEffect, useState} from "react";
import MainCard from "../../../../../shared/MainCard";
import AddCard from "../AddCard";
import Slider from "../../../../../shared/Slider/components/Slider";
import {NavLink} from "react-router-dom";
import "./css/Main.css";
import "./css/MainLight.css";
import "./css/MainDark.css";

const Main = ({switcher, arrCards, setShow, setObjCard}) => {

    const [cardList, setCardList] = useState([])

    const theme = switcher ? 'dark' : 'light'
    useEffect(() => {
        if (arrCards) {
            const newArr = arrCards.map((item, index) => {

                return(
                    <NavLink className="link" to={{pathname: '/card', state: item}} key={"NavLinkCard-" + index}>
                        <MainCard switcher={theme} obj={item} key={"MainCard-" + index}/>
                    </NavLink>
                )
            })
            setCardList(newArr)
        }
    }, [theme, arrCards])

    return(
        <main className={"main " + theme}>
            <Slider>
                {cardList}
                <NavLink className="link" to='/add-city'>
                    <AddCard
                        switcher={theme}
                        setShow={setShow}
                        setObjCard={setObjCard}
                    />
                </NavLink>
            </Slider>
        </main>
    )
}

export default Main
