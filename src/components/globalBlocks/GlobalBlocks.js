import { Container, Input } from '../../classes/Classes.js'

export const BodyContainer = new Container(
  document.querySelector('body'),
  'body'
)
export const headerSearch = new Container(
  document.createElement('div'),
  'headers',
  'id',
  'head'
)
export const contentContainer = new Container(
  document.createElement('div'),
  'content',
  'id',
  'con'
)
export const fullWeatherContainer = new Container(
  document.createElement('div'),
  'full-weather-container',
  'id',
  'fullWeatherContainer'
)
export const input = new Input(document.createElement('input'), 'search', [
  { attr: 'id', attrContent: 'townName' },
  { attr: 'placeholder', attrContent: 'Search a city...' },
  { attr: 'type', attrContent: 'search' },
  { attr: 'autocomplete', attrContent: 'off' },
  { attr: 'role', attrContent: 'combobox' },
  { attr: 'list', attrContent: 'select' },
])
