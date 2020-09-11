import React, {useState} from "react";
import MainCard from "../../../../../shared/MainCard";
import './AddCity.css'
import {useClass} from "../../../../../shared/hooks/useClass";
import {NavLink} from "react-router-dom";
import Search from "../Search";
import {useAPI} from "../../../../../shared/hooks/useAPIWeather";

const AddCity = ({switcher, objCard, setObjCard, addCard, setShow, resultShow}) => {
    const [value, setValue] = useState('')
    const [card, setCard] = useState('')
    const [listCountryShow, setListCountryShow, result] = useClass(true, '', 'hide')
    const [animate, setAnimate, animateResult] = useClass(false, 'add-card')

    useAPI(card, setObjCard)

    const btn =
        <NavLink to='/' className='link-btn'><
            button className="btn" onClick={addCard}>Add Country +</button>
        </NavLink>;

    return(
        <div className={"search-page " + switcher}>
            <h3 className="search-title">Search Country</h3>
            <Search
                value={value}
                result={result}
                listCountryShow={listCountryShow}
                setValue={setValue}
                setListCountryShow={setListCountryShow}
                setCard={setCard}
                setShowCard={setShow}
                setAnimate={setAnimate}
            />
            <div className="loader">
                <span className="loader-pipe" />
                <span className="loader-pipe" />
                <span className="loader-pipe" />
            </div>
            <div className={"hidden-block " + resultShow}>
                <MainCard switcher={switcher} btn={btn} obj={objCard} animate={animateResult}/>
            </div>
            <div className="search-decor" />
            <div className="search-decor-right" />
        </div>
    )
}

export default AddCity
