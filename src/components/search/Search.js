import './search.scss'
import axios from 'axios'
import { Router } from '../../router/Router.js'
import FullWeatherInfo from '../fullWeatherInfo/FullWeatherInfo.js'
import { FavoriteTown } from '../favoriteTown/FavoriteTown.js'

const BASE_URL =
  'http://api.weatherapi.com/v1/forecast.json?key=52f1b073a10e42e5a73230815211312'

export default function Search() {
  const body = document.querySelector('body')
  const header = document.createElement('div')
  const input = document.createElement('input')
  const icon = document.createElement('img')
  const buttonSearch = document.createElement('a')

  header.classList.add('headers')
  input.classList.add('search')
  header.setAttribute('id', 'head')
  setAttributes(input, {
    id: 'townName',
    placeholder: 'Search a city...',
    type: 'text',
    required: '',
    autocomplete: 'off',
    // list: 'town',
  })
  setAttributes(buttonSearch, {
    href: '#/weatherInfo/',
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
    console.log('nice click is work')
    const townName = document.getElementById('townName').value
    axios
      .get(`${BASE_URL}&q=${townName}&days=1&aqi=no&alerts=no`)
      .then((response) => {
        try {
          sessionStorage['weather forecast'] = JSON.stringify(response.data)
          const location = window.location.hash
          if (location) {
            Router(location, response.data)
            if (body.childElementCount > 1) {
              const content = document.getElementById('con')
              body.removeChild(header)
              body.removeChild(content)
            }
          }
        } catch (e) {
          console.log('Router Error: ', e)
        }
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          alert(
            `message The request was made and the server responded with a status code ${error.response.status}`
          )
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the
          // browser and an instance of
          // http.ClientRequest in node.js
          alert(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          alert('Error', error.message)
        }
        console.log(error.config)
      })
  }

  if (window.location.hash === '#/weatherInfo/') {
    const bod = document.querySelector('body')
    bod.removeChild(header)
    const newObj = JSON.parse(sessionStorage['weather forecast'] || 0)
    FullWeatherInfo(newObj)
    if (body.childElementCount > 1) {
      const con = document.getElementById('con')
      body.removeChild(con)
    }
  }
  FavoriteTown()
}
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}
