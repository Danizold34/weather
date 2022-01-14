import { View } from '../../classes/Classes.js'
import { buildTree } from '../../services/ComponentsMethods.js'
import './forecastDay.scss'
const dayItems = new View(document.createElement('div'), 'day-items')
const rootDayForecast = {
  component: dayItems,
}
export const ForecastDay = (info, dailyForecast) => {
  let stringForDayInfo = ''
  for (let i = 0; i < 3; i++) {
    stringForDayInfo += `<div class="day-item"><span>${info.forecast.forecastday[i].date}</span>
    <img src="https:${info.forecast.forecastday[i].day.condition.icon}" >
    <span> max temp: ${info.forecast.forecastday[i].day.maxtemp_c}°C</span>
    <span> min Temp: ${info.forecast.forecastday[i].day.mintemp_c}°C</span></div>`
  }
  dayItems.addContent(stringForDayInfo)
  buildTree(dailyForecast, rootDayForecast)
}
