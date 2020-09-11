import React from "react";
import logo from "../../../../assets/img/svg/icons8-react.svg";
import {NavLink} from "react-router-dom";

const HeaderStart = ({setBurger, visible, theme}) => {
    return(
        <div className={"header-start"}>
            <div className="header-block">
                <div className="burger" style={{display: "flex", alignItems: "center"}}>
                    <div
                        className={"burger-block " + visible}
                        onClick={() => setBurger()}
                    >
                        <span className={"burger-part " + theme} />
                        <span className={"burger-part " + theme} />
                        <span className={"burger-part " + theme} />
                    </div>
                </div>
            </div>
            <NavLink to='./' className={'link logo-block'}>
                <img src={logo} className={"logo"} alt="#" />
                <h1 className="logo-title">Weather App</h1>
            </NavLink>
        </div>
    )
}

export default HeaderStart
