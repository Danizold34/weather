// import { ApiReq } from '../../api/apiReq.js'
import './search.scss'
import axios from 'axios'
import { Router } from '../../router/Router.js'

const BASE_URL =
  'https://api.weatherapi.com/v1/current.json?key=52f1b073a10e42e5a73230815211312'

export default function Search() {
  const body = document.querySelector('body')
  const header = document.createElement('div')
  const input = document.createElement('input')
  const icon = document.createElement('img')
  const buttonSearch = document.createElement('a')

  header.classList.add('headers')
  input.classList.add('search')

  setAttributes(input, {
    id: 'townName',
    placeholder: 'Search a city...',
    type: 'text',
    required: '',
    autocomplete: 'off',
    // list: 'town',
  })
  setAttributes(buttonSearch, {
    // href: '#/weatherInfo/',
    id: 'search-button',
  })
  buttonSearch.classList.add('btn-search')

  setAttributes(icon, {
    src: 'https://img.icons8.com/ios/30/000000/search--v3.png',
  })
  icon.classList.add('search-icon')

  body.appendChild(header)
  header.appendChild(buttonSearch)
  header.appendChild(input)
  buttonSearch.appendChild(icon)

  buttonSearch.onclick = () => {
    try {
      console.log('nice click is wprk')
      const townName = document.getElementById('townName').value
      axios.get(`${BASE_URL}&q=${townName}&aqi=no`).then((response) => {
        try {
          const location = window.location.hash
          console.log(window.location.hash)
          if (location) {
            Router(location, response.data)
          }
        } catch (e) {
          console.log('Router Error: ', e)
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}
