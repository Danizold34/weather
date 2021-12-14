import axios from 'axios'

const BASE_URL =
  'https://api.weatherapi.com/v1/current.json?key=52f1b073a10e42e5a73230815211312'

export const ApiReq = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}&q=${name}&aqi=no`)
    const weatherObj = response.data
    console.log(`GET: weatherObject`, weatherObj)
    return weatherObj
  } catch (errors) {
    console.error(errors)
  }
}
