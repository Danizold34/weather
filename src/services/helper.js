import axios from 'axios'

export const SearchHelper = () => {
  const debounce = (fn, waitTime) => {
    let timeout
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments)
      }
      clearTimeout(timeout)

      timeout = setTimeout(fnCall, waitTime)
    }
  }
  const onChange = () => {
    axios
      .get(`http://api.travelpayouts.com/data/ru/cities.json`)
      .then((response) => {
        console.log(response)
      })
  }

  const ChangeDebounce = debounce(onChange, 280)
  document.getElementById('townName').addEventListener('keyup', ChangeDebounce)
}
