import {
  BodyContainer,
  contentContainer,
  headerSearch,
} from '../components/body/Body.js'
import { FullWeatherInfo } from '../components/fullWeatherInfo/FullWeatherInfo.js'
export const SaveAfterReload = () => {
  if (window.location.hash === '#/weatherInfo/') {
    BodyContainer.removeChild(contentContainer)
    BodyContainer.removeChild(headerSearch)
    const newObj = JSON.parse(sessionStorage['weather forecast'] || 0)
    FullWeatherInfo(newObj)
  }
}
