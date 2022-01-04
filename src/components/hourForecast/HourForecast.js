import { View } from '../../classes/Classes.js'
import { buildTree } from '../../services/ComponentsMethods.js'
import './hourForecast.scss'
export const HourForecast = (info, hourForecast) => {
  console.log(info.length)

  for (let i = 0; i < info.length; i++)
    if (i == 0 || i % 3 == 0) {
      const timeStr = info[i].time.slice(12)

      const hourItem = new View(
        document.createElement('div'),
        'hour-item',
        `<span>${timeStr}</span>
      <img src="${info[i].condition.icon}" >
      <span> ${info[i].temp_c}°C</span>`
      )
      console.log(i)
      const rootHourForecast = {
        component: hourItem,
      }

      buildTree(hourForecast, rootHourForecast)
    }
}
