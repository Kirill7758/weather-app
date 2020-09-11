import React from "react";
import imgUser from "../../../../assets/img/jpg/IMG_0785.jpeg";
import "./css/Sidebar.css";
import "./css/SidebarDark.css";

const Sidebar = ({burger, theme}) => {
    const hide = !burger ? 'hide ' : ''
    return(
        <div className={"side-bar " + hide}>
            <div className={"side-col " + theme}>
                <div className="info">
                    <h3 className="info-title">Welcome Back</h3>
                    <div className="info-user">
                        <div className="info-img-block">
                            <img className={"info-img"} src={imgUser} alt="#"/>
                        </div>
                        <div className="info-user-contact">
                            <h3 className="info-user-name">Gerasimenko Kirill</h3>
                            <span className="info-user-email">kirillg7758@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
