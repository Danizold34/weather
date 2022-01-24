import { WEATHEROBJECT } from '../constant/Constant.js'
export const setValueFromSessionStorage = (data) => {
  sessionStorage[WEATHEROBJECT] = JSON.stringify(data)
}
export const getValueFromSessionStorage = () =>
  JSON.parse(sessionStorage[WEATHEROBJECT] || 0)

export const removeValueFromLocalStorage = (value) => {
  localStorage.removeItem(`${value} weather`)
}
export const setValueFromLocalStorage = (value) => {
  localStorage[`${value} weather`] = JSON.stringify(value)
}
