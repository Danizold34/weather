import { View } from '../../classes/Classes.js'
import { buildTree } from '../../services/ComponentsMethods.js'
import './hourForecast.scss'
const hourItems = new View(document.createElement('div'), 'hour-items')
const rootHourForecast = {
  component: hourItems,
}
export const HourForecast = (info, hourForecast) => {
  let stringInfoHourItem = ''
  for (let i = 0; i < info.length; i++) {
    if (i == 0 || i % 3 == 0) {
      const timeStr = info[i].time.slice(11)
      stringInfoHourItem += `<div class="hour-item"><span>${timeStr}</span>
      <img src="https:${info[i].condition.icon}" >
      <span> ${info[i].temp_c}°C</span></div>`
    }
  }
  hourItems.addContent(stringInfoHourItem)
  buildTree(hourForecast, rootHourForecast)
}
