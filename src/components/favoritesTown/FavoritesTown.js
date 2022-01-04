import { Container } from '../../classes/Classes.js'
import { FavoriteTown } from '../favoriteTown/FavoriteTown.js'
import { buildTree } from '../../services/ComponentsMethods.js'
import './favoriteTown.scss'
export const FavoritesTown = () => {
  const body = new Container(document.querySelector('body'), 'body')
  const content = new Container(
    document.createElement('div'),
    'content',
    'id',
    'con'
  )
  FavoriteTown(content)
  const rootFavorite = {
    component: content,
  }
  buildTree(body, rootFavorite)
}
