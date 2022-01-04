import FullWeatherInfo from '../components/fullWeatherInfo/FullWeatherInfo.js'
import Search from '../components/search/Search.js'

export const Router = (location, weatherObject) => {
  switch (location) {
    case '#/weatherInfo/':
      console.log('weatherObject', weatherObject)
      FullWeatherInfo(weatherObject)

      break
    case '/':
      Search()
  }
}
