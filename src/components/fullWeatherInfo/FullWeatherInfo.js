import { Router } from '../../router/Router.js'
import { Container, View, Button } from '../../classes/Classes.js'
import { buildTree } from '../../services/ComponentsMethods.js'
import './fullWeatherInfo.scss'
import { HourForecast } from '../hourForecast/HourForecast.js'
import { ForecastDay } from '../forecastDay/ForecastDay.js'
import {
  BodyContainer,
  fullWeatherContainer,
} from '../globalBlocks/GlobalBlocks.js'
const headerContainer = new Container(
  document.createElement('div'),
  'header-container'
)
const contentContainer = new Container(
  document.createElement('div'),
  'content-container'
)
const townName = new View(document.createElement('div'), 'town-name')
const condition = new View(document.createElement('div'), 'condition')
const headerInfo = new Container(document.createElement('div'), 'header-info')
const currentTemp = new View(document.createElement('div'), 'current-temp')
const feelsTemp = new View(document.createElement('div'), 'feels-temp')
const likeButton = new Button(
  document.createElement('a'),
  'like-button',
  'id',
  'likeButton',
  '<img src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/000000/external-favorite-essentials-prettycons-lineal-prettycons.png"/>'
)
const backButton = new Button(
  document.createElement('a'),
  'back-button',
  'href',
  '#/',
  '<img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/50/000000/external-back-arrow-arrows-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"/>'
)
const hourForecast = new Container(
  document.createElement('div'),
  'hour-forecast'
)
const hour = new Container(document.createElement('div'), 'hour')
const dailyForecast = new Container(
  document.createElement('div'),
  'daily-forecast'
)
const day = new Container(document.createElement('div'), 'day')

const root_tree = {
  component: fullWeatherContainer,
  children: [
    {
      component: headerContainer,
      children: [
        { component: backButton },
        {
          component: headerInfo,
          children: [
            { component: townName },
            { component: condition },
            { component: currentTemp },
            { component: feelsTemp },
          ],
        },
        { component: likeButton },
      ],
    },
    {
      component: contentContainer,
      children: [
        { component: hourForecast, children: [{ component: hour }] },
        { component: dailyForecast, children: [{ component: day }] },
      ],
    },
  ],
}

export const FullWeatherInfo = (info) => {
  townName.addContent(`<span>${info.location.name}</span>`)
  condition.addContent(`<span> ${info.current.condition.text}</span>`)
  currentTemp.addContent(`<span>${info.current.temp_c}°C</span>`)
  feelsTemp.addContent(
    `<span> Feels like<br> ${info.current.feelslike_c}°C</span>`
  )
  HourForecast(info.forecast.forecastday[0].hour, hour)
  ForecastDay(info, day)

  backButton.onClick(() => {
    try {
      window.location.hash = '#/'
      BodyContainer.removeChild(fullWeatherContainer)
      Router(window.location.hash)
    } catch (e) {
      console.log('Router Error: ', e)
    }
  })
  const addedAndDeleteFavoriteTown = () => {
    console.log('entry with ', info.location.name)

    if (localStorage[`${info.location.name} weather`]) {
      localStorage.removeItem(`${info.location.name} weather`)
      alert('You deleted town successfully')
    } else {
      localStorage[`${info.location.name} weather`] = JSON.stringify(
        info.location.name
      )
      alert('You added new town successfully')
    }
  }
  likeButton.onClick(addedAndDeleteFavoriteTown)
  buildTree(BodyContainer, root_tree)
}
