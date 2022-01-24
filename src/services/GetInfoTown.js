import axios from 'axios'
import { BASE_URL } from '../constant/Constant.js'

class GetInfoTown {
  constructor() {}
  getInfoByName = async (name) => {
    const data = await axios.get(
      `${BASE_URL}&q=${name}&days=5&aqi=no&alerts=no`
    )
    return data
  }
}

export const getInfoTown = new GetInfoTown()
