import './search.scss'

export default function Search() {
  const body = document.querySelector('body')
  const header = document.createElement('div')
  const input = document.createElement('input')
  const icon = document.createElement('img')
  const buttonSearch = document.createElement('button')

  header.classList.add('headers')
  input.classList.add('search')

  function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key])
    }
  }
  setAttributes(input, {
    id: 'townName',
    placeholder: 'Search a city...',
    type: 'text',
  })

  buttonSearch.classList.add('btn-search')
  setAttributes(icon, {
    src: 'https://img.icons8.com/ios/30/000000/search--v3.png',
  })
  icon.classList.add('search-icon')

  body.appendChild(header)
  header.appendChild(buttonSearch)
  header.appendChild(input)

  buttonSearch.appendChild(icon)
}
