const axios = require('axios')

const BASE_URL =
  'http://api.weatherapi.com/v1/forecast.json?key=52f1b073a10e42e5a73230815211312'

class GetInfoTown {
  constructor() {}
  getInfoByName = async (name) => {
    const data = await axios.get(
      `${BASE_URL}&q=${name}&days=5&aqi=no&alerts=no`
    )
    return data
  }
}
const getInfoTown = new GetInfoTown()
module.exports = getInfoTown
