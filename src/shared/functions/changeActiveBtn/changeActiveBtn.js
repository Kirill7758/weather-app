export const changeActiveBtn = (condition, handler) => {
    if (condition) {
        handler(true)
    } else {
        handler(false)
    }
}
