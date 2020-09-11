import {useState} from 'react'

export const useClass = (state, firstClass, secondClass = '', deps = []) => {
    const [stateElement, setStateElement] = useState(state)
    const changeClass = stateElement ? firstClass : secondClass

    const onToggle = (arg) => {
        typeof arg === 'boolean' ? setStateElement(arg) : setStateElement(!stateElement)
    }


    return [stateElement, onToggle, changeClass]
}

