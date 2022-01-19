import './search.scss'
import { Router } from '../../router/Router.js'
import { FavoritesTown } from '../favoritesTown/FavoritesTown.js'
import { buildTree } from '../../services/ComponentsMethods.js'
import { Button, Container } from '../../classes/Classes.js'
import { auxiliaryWindow } from '../auxiliaryWindow/AuxiliaryWindow.js'
import {
  BodyContainer,
  headerSearch,
  contentContainer,
  input,
} from '../globalBlocks/GlobalBlocks.js'
import { getInfoTown } from '../../services/GetInfoTown.js'
import { SaveAfterReload } from '../../services/SaveAfterReload.js'

const form = new Container(document.createElement('div'), 'form')

const buttonSearch = new Button(
  document.createElement('a'),
  'btn-search',
  'href',
  '#/weatherInfo/',
  `<img class="search-icon" src="https://img.icons8.com/ios/30/000000/search--v3.png" >`
)

const rootSearch = {
  component: headerSearch,
  children: [
    {
      component: form,
      children: [{ component: buttonSearch }, { component: input }],
    },
  ],
}
export const Search = () => {
  buildTree(BodyContainer, rootSearch)

  const apiReqForSearch = async () => {
    const townName = document.getElementById('townName').value

    try {
      const { data } = await getInfoTown.getInfoByName(townName)
      sessionStorage['weather forecast'] = JSON.stringify(data)

      const location = window.location.hash
      if (BodyContainer.el.childElementCount > 1) {
        BodyContainer.removeChild(headerSearch)
        BodyContainer.removeChild(contentContainer)
      }
      Router(location, data)
    } catch {
      alert('Town name is incorrect')
      window.location.hash = '#/'
      Router(window.location.hash)
    }
  }
  buttonSearch.onClick(apiReqForSearch)
  auxiliaryWindow()
  FavoritesTown()
  SaveAfterReload()
}
