import React from "react"
import './css/CardInfo.css'
import './css/CardInfoLight.css'
import './css/CardInfoDark.css'

import back from '../../../../assets/img/svg/back-white.svg'
import backBlack from '../../../../assets/img/svg/back.svg'

import {NavLink, useLocation} from "react-router-dom"
import CardItem from "../CardItem"

const CardInfo = ({theme, today}) => {
    const {state} = useLocation()
    const arr = theme === 'light' ? backBlack : back
    return(
        <main className={"main-card " + theme}>
            <div className="card-info-block">
                <NavLink to="/">
                    <div className="comeback-block">
                        <div className="comeback-arrow">
                            <img className="comeback-img" src={arr} alt="#"/>
                        </div>
                        <span className="comeback-title">Back</span>
                    </div>
                </NavLink>
                <div className="decor">
                </div>
                <CardItem {...state} today={today}/>
            </div>
        </main>
    )
}

export default CardInfo
