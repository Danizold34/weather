import './style/index.scss'
import { ApiReq } from './apiReq.js'
const body = document.querySelector('body')
const header = document.createElement('div')
const input = document.createElement('input')
const icon = document.createElement('img')
const buttonSearch = document.createElement('button')
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}

header.classList.add('headers')
input.classList.add('search')
setAttributes(input, {
  id: 'townName',
  placeholder: 'Search a city...',
  type: 'search',
})
console.log(input.attributes)

buttonSearch.classList.add('btn-search')
setAttributes(icon, {
  src: 'https://img.icons8.com/ios/30/000000/search--v3.png',
})
icon.classList.add('search-icon')

body.appendChild(header)
header.appendChild(input)
header.appendChild(buttonSearch)
buttonSearch.appendChild(icon)
const info = document.createElement('button')
body.appendChild(info)
// const Fuu = (obj) => {
//   info.innerHTML = obj.location
// }
buttonSearch.onclick = () => {
  const town = document.getElementById('townName').value
  const weatherPromise = ApiReq(town)
  const weatherInfo = async () => {
    let result = await weatherPromise
    console.log(result)
  }
  weatherInfo()
}
