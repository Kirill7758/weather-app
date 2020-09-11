export const addCard = (objCard, arrCards, setArrCards) => {
    setArrCards((state) => !!state ? [objCard, ...state] : [objCard])
    if (localStorage.getItem('cards')) {
        localStorage.removeItem('cards')
        localStorage.setItem('cards', JSON.stringify([objCard, ...arrCards]))
    } else if (!!arrCards) {
        localStorage.setItem('cards', JSON.stringify([objCard, ...arrCards]))
    } else {
        localStorage.setItem('cards', JSON.stringify([objCard]))
    }
}
