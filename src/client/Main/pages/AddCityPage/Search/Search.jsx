import React, {useEffect, useState} from 'react'
import search from "../../../../../assets/img/svg/icons8-react.svg"
import "./css/Search.css"
import "./css/SearchDark.css"
import "./css/SearchLight.css"
import {onFilterCity} from "../../../../../shared/functions";

const Search = (props) => {
    const {
        value,
        result,
        listCountryShow,
        setValue,
        setListCountryShow,
        setCard,
        setShowCard,
        setAnimate
    } = props
    const [countryName, setCountryName] = useState([])
    const [showList, setShowList] = useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((city) => city.json())
            .then((res) => {
                const newArr = res.map(({name, capital}) => `${name.toUpperCase()}, ${capital.toUpperCase()}`)
                setCountryName(newArr)
            })
        setListCountryShow(false)
    }, [])

    const onChangeInput = (item) => {
        setValue(item)
        setListCountryShow(false)
        setCard(item)
        setShowCard(true)
        setAnimate()
    }

    return(
        <div className="search-block">
            <form className={{minWidth: '100%'}} onSubmit={(e) => {
                e.preventDefault()
                setCard(value)
                setShowCard(true)
            }}>
            <label className="search">
                <input
                    value={value}
                    type="text"
                    placeholder="Input Country"
                    className="search-input"
                    onChange={({target}) => {
                        setValue(target.value.toUpperCase())
                        onFilterCity(countryName, value, onChangeInput, listCountryShow, setListCountryShow, setShowList)
                    }}
                />
                <img
                    src={search}
                    className="search-btn"
                    alt="#"
                    onClick={() => {
                        setAnimate()
                        setCard(value)
                        setShowCard(true)
                    }}
                />
            </label>
            <ul className={"search-list " + result}>
                {showList}
            </ul>
            </form>
        </div>
    )
}

export default Search
