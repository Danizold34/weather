import {
  BodyContainer,
  contentContainer,
  headerSearch,
} from '../components/globalBlocks/GlobalBlocks.js'
import { FullWeatherInfo } from '../components/fullWeatherInfo/FullWeatherInfo.js'
import { getValueFromSessionStorage } from './GetAndRemoveValueFromStorages.js'
export const SaveAfterReload = () => {
  if (window.location.hash === '#/weatherInfo/') {
    BodyContainer.removeChild(contentContainer)
    BodyContainer.removeChild(headerSearch)
    const newObj = getValueFromSessionStorage()
    FullWeatherInfo(newObj)
  }
}
