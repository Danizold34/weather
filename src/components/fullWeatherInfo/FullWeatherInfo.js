import { Router } from '../../router/Router.js'
import { Container, View, Button } from '../../classes/Classes.js'
import { buildTree } from '../../services/ComponentsMethods.js'
import './fullWeatherInfo.scss'
import { HourForecast } from '../hourForecast/HourForecast.js'
import { ForecastDay } from '../forecastDay/ForecastDay.js'

export default function FullWeatherInfo(info) {
  const body = new Container(document.querySelector('body'), 'body')
  const fullWeatherContainer = new Container(
    document.createElement('div'),
    'full-weather-container'
  )
  const headerContainer = new Container(
    document.createElement('div'),
    'header-container'
  )
  const contentContainer = new Container(
    document.createElement('div'),
    'content-container'
  )
  const headerInfo = new Container(document.createElement('div'), 'header-info')
  const townName = new View(
    document.createElement('div'),
    'town-name',
    `<span>${info.location.name}</span>`
  )
  const condition = new View(
    document.createElement('div'),
    'condition',
    `<span> ${info.current.condition.text}</span>`
  )
  const currentTemp = new View(
    document.createElement('div'),
    'current-temp',
    `<span>${info.current.temp_c}°C</span>`
  )
  const feelsTemp = new View(
    document.createElement('div'),
    'feels-temp',
    `<span> Feels like<br> ${info.current.feelslike_c}°C</span>`
  )
  const likeButton = new View(
    document.createElement('a'),
    'like-button',
    '<img src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/000000/external-favorite-essentials-prettycons-lineal-prettycons.png"/>'
  )
  const backButton = new Button(
    document.createElement('a'),
    'back-button',
    'href',
    '/',
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

  buildTree(body, root_tree),
    HourForecast(info.forecast.forecastday[0].hour, hour)
  // add hour forecast (first var is Forecast(obj), second - container for content)
  ForecastDay(info, day)

  backButton._el.onclick = () => {
    try {
      const location = window.location.hash
      if (location) {
        Router(location)
        if (body.childElementCount > 1) {
          body.removeChild(headerContainer)
          body.removeChild(fullWeatherContainer)
        }
      }
    } catch (e) {
      console.log('Router Error: ', e)
    }
  }

  likeButton._el.onclick = () => {
    if (!localStorage[`${info.location.name} weather`]) {
      localStorage[`${info.location.name} weather`] = JSON.stringify(
        info.location.name
      )
      alert('You added new town successfully')
    } else {
      localStorage.removeItem(`${info.location.name} weather`)
      alert('You deleted town successfully')
    }
  }
}
