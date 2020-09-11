import React from "react";

const Switcher = ({theme, switcher, setSwitcher}) => {

    return(
        <div className="switcher-block">
            <span className="switcher-light">Light</span>
            <div
                className={"switcher " + theme}
                onClick={() => setSwitcher(!switcher)}
            >
                <div className="switcher-circle">
                </div>
            </div>
            <span className="switcher-dark">Dark</span>
        </div>
    )
}

export default Switcher
