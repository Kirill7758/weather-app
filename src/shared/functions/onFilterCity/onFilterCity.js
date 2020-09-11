import React from "react";

export const onFilterCity = (
    countryName,
    value,
    onChangeInput,
    listCountryShow,
    setListCountryShow,
    setShowList
) => {
    const newList = countryName.filter((item) => item.includes(value))
    const newListCountry = newList.map((item, idx) =>
        <li
            onClick={() => onChangeInput(item)}
            className={"search-city"}
            key={'city-' + idx}
        >{item}</li>);
    (value === '' || listCountryShow.length) ? setListCountryShow(false) : setListCountryShow(true)
    setShowList(newListCountry)
}
