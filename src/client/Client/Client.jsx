import React, {useEffect, useMemo, useState} from "react";
import Header from "../Header/components/Header";
import {useClass} from "../../shared/hooks/useClass";
import Sidebar from "../SideBar/components/SideBar";
import {Route, Switch} from "react-router-dom";
import CardInfo from "../../shared/CardInfo/components/CardInfo";
import Main from "../Main/pages/MainPage/Main";
import AddCity from "../Main/pages/AddCityPage/AddCity";
import {addCard} from "../../shared/functions";


const Client = () => {
    const [switcher, setSwitcher, theme] = useClass(true, 'dark', 'light')
    const [burger, setBurger, visible] = useClass(false, 'active')
    const [show, setShow, resultShow] = useClass(false, 'show', 'hide');
    const [objCard, setObjCard] = useState({})
    const [arrCards, setArrCards] = useState([])
    const [today, setToday] = useState('')

    const hashComponentCardInfo =
        useMemo(() =>
            <Route path='/card'><CardInfo theme={theme} today={today}/></Route>, [theme, today])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('cards'))
        setArrCards(data)
    }, [objCard])

    return (
        <>
            <Header
                switcher={switcher} theme={theme} visible={visible}
                setSwitcher={setSwitcher} setBurger={setBurger} setToday={setToday}
            />
            <Switch>
                <Route exact path='/'>
                    <Main
                        switcher={switcher} arrCards={arrCards}
                        setObjCard={setObjCard} setShow={setShow}
                    />
                </Route>
                {hashComponentCardInfo}
                <Route path='/add-city'>
                    <AddCity
                        switcher={theme} objCard={objCard} resultShow={resultShow} show={show}
                        setObjCard={setObjCard} setShow={setShow}
                        addCard={() => addCard(objCard, arrCards, setArrCards)}
                    />
                </Route>
                <Route path="*">
                    <Main
                        switcher={switcher} arrCards={arrCards}
                        setObjCard={setObjCard} setShow={setShow}
                    />
                </Route>
            </Switch>
            <Sidebar burger={burger} theme={theme}/>
        </>
    )
}

export default Client
