import { View } from '../../classes/Classes.js'
import { buildTree } from '../../services/ComponentsMethods.js'
import './forecastDay.scss'
export const ForecastDay = (info, dailyForecast) => {
  for (let i = 0; i < 3; i++) {
    const dayItem = new View(
      document.createElement('div'),
      'day-item',
      `<span>${info.forecast.forecastday[i].date}</span>
    <img src="${info.forecast.forecastday[i].day.condition.icon}" >
    <span> max temp: ${info.forecast.forecastday[i].day.maxtemp_c}°C</span>
    <span> min Temp: ${info.forecast.forecastday[i].day.mintemp_c}°C</span>`
    )

    const rootDayForecast = {
      component: dayItem,
    }
    buildTree(dailyForecast, rootDayForecast)
  }
}
