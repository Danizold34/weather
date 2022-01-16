import { FavoriteTown } from '../favoriteTown/FavoriteTown.js'
import { buildTree } from '../../services/ComponentsMethods.js'
import './favoriteTown.scss'
import {
  BodyContainer,
  contentContainer,
} from '../globalClasses/GlobalClasses.js.js'
const rootFavorite = {
  component: contentContainer,
}

export const FavoritesTown = () => {
  const keys = Object.keys(localStorage)
  while (contentContainer.el.lastChild) {
    contentContainer.el.removeChild(contentContainer.el.lastChild)
  }
  keys.map((key) => {
    const name = JSON.parse(localStorage[key])

    FavoriteTown(contentContainer, name)
  })
  buildTree(BodyContainer, rootFavorite)
}
