import axios from 'axios'
import { Router } from '../../router/Router.js'
import './favoriteTown.scss'
const BASE_URL =
  'http://api.weatherapi.com/v1/forecast.json?key=52f1b073a10e42e5a73230815211312'

export const FavoriteTown = () => {
  let keys = Object.keys(localStorage)
  const body = document.querySelector('body')
  const content = document.createElement('div')
  for (let key of keys) {
    const name = JSON.parse(localStorage[key])

    axios
      .get(`${BASE_URL}&q=${name}&days=1&aqi=no&alerts=no`)
      .then((response) => {
        const link = document.createElement('a')
        const favoriteContainer = document.createElement('div')
        const townName = document.createElement('div')
        const temp = document.createElement('div')
        const icon = document.createElement('img')
        const wind_mph = document.createElement('div')
        const pressure_mb = document.createElement('div')
        const humidity = document.createElement('div')
        const infoDiv = document.createElement('div')
        const leftDivInfo = document.createElement('div')
        const container = document.createElement('div')

        setAttributes(icon, {
          src: `${response.data.current.condition.icon}`,
        })
        humidity.innerHTML =
          `<span>${response.data.current.humidity}%</span>` +
          '<img src="https://img.icons8.com/ios/50/000000/humidity.png"/>'
        pressure_mb.innerHTML =
          `<span>${response.data.current.pressure_mb}mb</span>` +
          '<img src="https://img.icons8.com/ios/50/000000/pressure.png"/>'
        wind_mph.innerHTML =
          `<span>${response.data.current.wind_mph}mph</span>` +
          '<img src="https://img.icons8.com/material-outlined/24/000000/wind.png"/>'
        townName.innerHTML = `<span class="Town-info-row">
   ${response.data.location.name}<br>
   ${response.data.location.country}</span>`
        temp.innerHTML = `<span>${response.data.current.temp_c}°C</span>`
        AddClass(
          [
            link,
            townName,
            favoriteContainer,
            temp,
            wind_mph,
            container,
            pressure_mb,
            humidity,
            leftDivInfo,
            infoDiv,
          ],
          [
            'link',
            'town-info',
            'favorite-container',
            'temp',
            'info-1',
            'container',
            'info-1',
            'info-1',
            'left-div-info',
            'right-div-info',
          ]
        )
        setAttributes(link, { href: '#/weatherInfo/', id: 'router-link' })
        Appends(leftDivInfo, [icon])
        Appends(infoDiv, [temp, townName])
        Appends(favoriteContainer, [infoDiv, leftDivInfo])
        Appends(container, [humidity, pressure_mb, wind_mph])
        Appends(link, [favoriteContainer, container])
        content.append(link)

        link.onclick = () => {
          const location = window.location.hash
          if (location) {
            Router(location, response.data)
            if (body.childElementCount > 1) {
              const head = document.getElementById('head')
              console.log('hi')
              body.removeChild(content)
              body.removeChild(head)
            }
          }
        }
      })
  }
  content.setAttribute('id', 'con')
  content.classList.add('content')
  body.appendChild(content)
}
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}
function Appends(el, attrs) {
  for (let i = 0; i < attrs.length; i++) {
    el.appendChild(attrs[i])
  }
}
function AddClass(el, classes) {
  for (let i = 0; i < classes.length; i++) {
    el[i].classList.add(classes[i])
  }
}
