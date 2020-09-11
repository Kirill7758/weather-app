import React from "react";
import img from "../../../../../assets/img/svg/002-sun.svg";
import cityImg from "../../../../../assets/img/svg/001-empire-state-building.svg";
import "./css/AddCard.css";
import "./css/AddCardDark.css";
import "./css/AddCardLight.css";

const AddCard = ({switcher, setShow, setObjCard}) => {

    return(
        <div className={"slider-card " + switcher} onClick={() => {
            setShow(false)
            setObjCard({})
        }}>
            <h3 className="card-city">Add Country</h3>
            <div className={"card-add " + switcher}>
                <span className={"card-plus " + switcher}></span>
                <span className={"card-plus " + switcher}></span>
            </div>
            <img className="card-city-img" src={cityImg} alt="#"/>
        </div>
    )
}

export default AddCard
