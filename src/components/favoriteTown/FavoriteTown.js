import { Button, Container, View } from '../../classes/Classes.js'
import { Router } from '../../router/Router.js'
import { buildTree } from '../../services/ComponentsMethods.js'
import { getInfoTown } from '../../services/GetInfoTown.js'
import { BodyContainer, headerSearch } from '../body/Body.js'

export const FavoriteTown = async (contentContainer, name) => {
  const keys = Object.keys(localStorage)
  console.log(contentContainer.el)

  if (contentContainer.el.childElementCount < keys.length) {
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
    const temp = new View(document.createElement('div'), 'temp')
    const townName = new View(document.createElement('div'), 'town-info')
    const windMph = new View(document.createElement('div'), 'info-1')
    const pressureMb = new View(document.createElement('div'), 'info-1')
    const humidity = new View(document.createElement('div'), 'info-1')
    const infoDiv = new Container(
      document.createElement('div'),
      'right-div-info'
    )
    const leftDivInfo = new View(document.createElement('div'), 'left-div-info')
    const container = new Container(document.createElement('div'), 'container')

    const { data } = await getInfoTown.getInfoByName(name)
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
            { component: pressureMb },
            { component: windMph },
          ],
        },
      ],
    }
    windMph.addContent(
      `<span>${data.current.wind_mph}mph</span>` +
        '<img src="https://img.icons8.com/material-outlined/24/000000/wind.png"/>'
    )

    townName.addContent(`<span class="Town-info-row">
 ${data.location.name}<br>
 ${data.location.country}</span>`)

    temp.addContent(`<span>${data.current.temp_c}°C</span>`)
    pressureMb.addContent(
      `<span>${data.current.pressure_mb}mb</span>` +
        '<img src="https://img.icons8.com/ios/50/000000/pressure.png"/>'
    )
    humidity.addContent(
      `<span>${data.current.humidity}%</span>` +
        '<img src="https://img.icons8.com/ios/50/000000/humidity.png"/>'
    )

    leftDivInfo.addContent(`<img src="https:${data.current.condition.icon}"> `)

    link.onClick(() => {
      contentContainer.el.innerHTML = ''

      BodyContainer.removeChild(contentContainer)
      BodyContainer.removeChild(headerSearch)
      sessionStorage['weather forecast'] = JSON.stringify(data)
      console.log('this info', data)
      Router('#/weatherInfo/', data)
    })

    buildTree(contentContainer, rootFavorites)
  }
}
