import './search.scss'
import { Router } from '../../router/Router.js'
import FullWeatherInfo from '../fullWeatherInfo/FullWeatherInfo.js'
import { FavoritesTown } from '../favoritesTown/FavoritesTown.js'
import { buildTree } from '../../services/ComponentsMethods.js'
import { BASE_URL } from '../../constant/Constant.js'
import { Button, Container, Input } from '../../classes/Classes.js'
import axios from 'axios'
import { SearchHelper } from '../../services/helper.js'
export default function Search() {
  const body = new Container(document.querySelector('body'), 'body')
  const header = new Container(
    document.createElement('div'),
    'headers',
    'id',
    'head'
  )
  const input = new Input(document.createElement('input'), 'search', [
    { attr: 'id', attrContent: 'townName' },
    { attr: 'placeholder', attrContent: 'Search a city...' },
    { attr: 'type', attrContent: 'text' },
    { attr: 'autocomplete', attrContent: 'off' },
    { attr: 'required', attrContent: '' },
  ])
  const buttonSearch = new Button(
    document.createElement('a'),
    'btn-search',
    'href',
    '#/weatherInfo/',
    `<img class="search-icon" src="https://img.icons8.com/ios/30/000000/search--v3.png" >`
  )

  const rootSearch = {
    component: header,
    children: [{ component: buttonSearch }, { component: input }],
  }

  buildTree(body, rootSearch)

  buttonSearch._el.addEventListener('click', () => {
    const townName = document.getElementById('townName').value
    console.log(townName)
    axios
      .get(`${BASE_URL}&q=${townName}&days=5&aqi=no&alerts=no`)
      .then((response) => {
        const obj = response.data
        sessionStorage['weather forecast'] = JSON.stringify(obj)
        const location = window.location.hash
        console.log(location)
        if (location) {
          console.log(response.data.forecast)
          Router(location, obj)
          const bod = document.querySelector('body')
          if (bod.childElementCount > 1) {
            const content = document.getElementById('con')
            const searchHeader = document.getElementById('head')
            bod.removeChild(searchHeader)
            bod.removeChild(content)
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          alert(
            `message The request was made and the server responded with a status code ${error.response.status}`
          )
        } else if (error.request) {
          alert(error.request)
        } else {
          alert(error.message)
        }
      })
  })
  SearchHelper()
  FavoritesTown() // add favorite town

  if (window.location.hash === '#/weatherInfo/') {
    const bod = document.querySelector('body')
    const searchHeader = document.getElementById('head')
    bod.removeChild(searchHeader)
    const newObj = JSON.parse(sessionStorage['weather forecast'] || 0)
    FullWeatherInfo(newObj)
    if (bod.childElementCount > 1) {
      const con = document.getElementById('con')
      bod.removeChild(con)
    }
  }
}
