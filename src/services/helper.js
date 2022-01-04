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
  const onChange = (e) => {
    console.log(e.target.value)
  }

  const ChangeDebounce = debounce(onChange, 280)
  document.getElementById('townName').addEventListener('keyup', ChangeDebounce)
}
