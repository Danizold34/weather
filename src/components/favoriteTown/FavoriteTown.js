import axios from 'axios'
import { Button, Container, View } from '../../classes/Classes.js'
import { BASE_URL } from '../../constant/Constant.js'
import { Router } from '../../router/Router.js'
import { buildTree } from '../../services/ComponentsMethods.js'
export const FavoriteTown = (content) => {
  const keys = Object.keys(localStorage)
  for (let key of keys) {
    const name = JSON.parse(localStorage[key])

    axios
      .get(`${BASE_URL}&q=${name}&days=5&aqi=no&alerts=no`)
      .then((response) => {
        const link = new Button(
          document.createElement('a'),
          'link',
          'href',
          '#/weatherInfo/'
        )
        const favoriteContainer = new Container(
          document.createElement('div'),
          'favorite-container'
        )
        const townName = new View(
          document.createElement('div'),
          'town-info',
          `<span class="Town-info-row">
            ${response.data.location.name}<br>
            ${response.data.location.country}</span>`
        )
        const temp = new View(
          document.createElement('div'),
          'temp',
          `<span>${response.data.current.temp_c}°C</span>`
        )
        const wind_mph = new View(
          document.createElement('div'),
          'info-1',
          `<span>${response.data.current.wind_mph}mph</span>` +
            '<img src="https://img.icons8.com/material-outlined/24/000000/wind.png"/>'
        )

        const pressure_mb = new View(
          document.createElement('div'),
          'info-1',
          `<span>${response.data.current.pressure_mb}mb</span>` +
            '<img src="https://img.icons8.com/ios/50/000000/pressure.png"/>'
        )
        const humidity = new View(
          document.createElement('div'),
          'info-1',
          `<span>${response.data.current.humidity}%</span>` +
            '<img src="https://img.icons8.com/ios/50/000000/humidity.png"/>'
        )
        const infoDiv = new Container(
          document.createElement('div'),
          'right-div-info'
        )
        const leftDivInfo = new View(
          document.createElement('div'),
          'left-div-info',
          `<img src="${response.data.current.condition.icon}"> `
        )
        const container = new Container(
          document.createElement('div'),
          'container'
        )

        const rootFavorites = {
          component: link,
          children: [
            {
              component: favoriteContainer,
              children: [
                {
                  component: infoDiv,
                  children: [{ component: temp }, { component: townName }],
                },
                { component: leftDivInfo },
              ],
            },
            {
              component: container,
              children: [
                { component: humidity },
                { component: pressure_mb },
                { component: wind_mph },
              ],
            },
          ],
        }

        buildTree(content, rootFavorites)

        link._el.onclick = () => {
          const location = window.location.hash
          if (location) {
            Router(location, response.data)

            const bod = document.querySelector('body')
            if (bod.childElementCount > 1) {
              const head = document.getElementById('head')
              const content = document.getElementById('con')
              console.log('hi')
              bod.removeChild(content)
              bod.removeChild(head)
            }
          }
        }
      })
  }
}
