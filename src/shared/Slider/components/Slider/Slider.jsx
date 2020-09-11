import React, {useEffect, useState} from "react";
import {useClass} from "../../../hooks/useClass";
import './css/Slider.css';
import './css/SliderLight.css';
import './css/SliderDark.css';

import {config} from '../../../config/config'
import {slide, changeActiveBtn} from '../../../functions'

const Slider = ({children}) => {
    const [hiddenElements, addElement] = children
    const {interval, PREV, NEXT} = config

    const [translateX, setTranslateX] = useState(0)
    // eslint-disable-next-line no-unused-vars
    const [disableNext, setDisableNext, disableNextClass] = useClass(false, 'disable')
    // eslint-disable-next-line no-unused-vars
    const [disablePrev, setDisablePrev, disablePrevClass] = useClass(false, 'disable')
    const [, setClick, click] = useClass(false, 'click')

    const styleTranslate = {
        transform: `translateX(${translateX}px)`,
        transition: '1.5s',
        width: hiddenElements.length > 2 ? 'auto' : '100%'
    }
    const styleHide = {display: 'none'}
    let count = 2;
    const width = window.innerWidth;
    // eslint-disable-next-line default-case
    switch (width) {
        case 1440:
            count = 2
            break;
        case 1024:
            count = 1
            break;
        case 768:
            count = 0
            break;
        case 425:
            count = 0
            break;
    }
    useEffect(() => {
        changeActiveBtn((translateX === (hiddenElements.length-count) * -interval) || hiddenElements.length === 0, setDisableNext)
        changeActiveBtn(translateX === 0, setDisablePrev)
    }, [translateX, hiddenElements, count, interval, setDisableNext, setDisablePrev])

    const arrows = [
        {
        className: PREV,
        disable: disablePrevClass,
        },
        {
            className: NEXT,
            disable: disableNextClass,
        },
    ]

    const getArrows = arrows.map(({className, disable}, idx) => {
        return(
            <span className={className + " " + disable}
                  key={'arrow-' + idx}
                  style={hiddenElements.length < 3 ? styleHide : {display: ''}}
                  onClick={() => {
                      setClick()
                      slide(className, hiddenElements.length, translateX, setTranslateX, count)
                  }}
            />
        )
    })

    return(
        <div className="slider-block">
            <div className="slider slider-md">
                <div className={"slider-visible " + click}>
                    <div className={"slider-row"} style={styleTranslate}>
                        {addElement}
                        {hiddenElements}
                    </div>
                </div>
            </div>
            {getArrows}
        </div>
    )
}

export default Slider
