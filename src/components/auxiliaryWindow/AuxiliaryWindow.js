import cities from 'cities.json'
import { Li, Ul } from '../../classes/Classes.js'
import { buildTree } from '../../services/ComponentsMethods.js'
import { headerSearch, input } from '../body/Body.js'
import './auxiliaryWindow.scss'

const towns = cities.map((value) => {
  delete value.country
  delete value.lat
  delete value.lng
  return value.name
})
const ul = new Ul(
  document.createElement('ul'),
  'ul-for-search',
  'role',
  'listbox'
)
const li = new Li(document.createElement('li'), 'li', 'role', 'presentation')
const liSecond = new Li(
  document.createElement('li'),
  'li',
  'role',
  'presentation'
)
const liThird = new Li(
  document.createElement('li'),
  'li',
  'role',
  'presentation'
)
const rootAuxiliaryWindow = {
  component: ul,
  children: [
    { component: li },
    { component: liSecond },
    { component: liThird },
  ],
}
const removeDomElementFromUl = () => {
  try {
    headerSearch.removeChild(ul)
  } catch {
    console.log('Nothing to remove')
  }
}
export const auxiliaryWindow = () => {
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
    const townsForSuggestion = []
    let numberOfTowns = 0
    towns.map((value) => {
      if (
        value.toLowerCase().includes(e.target.value.toLowerCase()) &&
        numberOfTowns < 3 &&
        e.target.value !== ' ' &&
        e.target.value !== ''
      ) {
        townsForSuggestion.push(value)
        numberOfTowns++
      }
      if (numberOfTowns === 3) {
        return
      }
    })

    townsForSuggestion.map((value, i, array) => {
      li.addContent(`${array[0]}`)
      if (array.length > 1) {
        liSecond.addContent(`${array[1]}`)
        liThird.addContent(`${array[2]}`)
      }
    })

    buildTree(headerSearch, rootAuxiliaryWindow)
  }

  const ChangeDebounce = debounce(onChange, 250)
  const DeleteDebounce = debounce(removeDomElementFromUl, 250)
  input.el.addEventListener('keyup', ChangeDebounce)

  input.el.addEventListener('focusout', DeleteDebounce)

  li.onClick(getNewInput)
  liSecond.onClick(getNewInput)
  liThird.onClick(getNewInput)
}
function getNewInput(e) {
  console.log(e.srcElement.innerHTML)
  const textInLi = e.srcElement.innerHTML
  input.el.value = textInLi
}
