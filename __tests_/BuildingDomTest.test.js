/**
 * @jest-environment jsdom
 */

const Button = require('./Button.js')
const Container = require('./Container.js')
const Input = require('./Input.js')
const buildTree = require('./BuildingDomTest.js')

it('Check BuildingDom function ', () => {
  const formTest = new Container(document.createElement('div'), 'form')

  const BodyContainerTest = new Container(document.createElement('div'), 'body')
  const buttonSearchTest = new Button(
    document.createElement('a'),
    'btn-search',
    'href',
    '#/weatherInfo/',
    `<img class="search-icon" src="https://img.icons8.com/ios/30/000000/search--v3.png" >`
  )
  const headerSearchTest = new Container(
    document.createElement('div'),
    'headers',
    'id',
    'head'
  )

  const inputTest = new Input(document.createElement('input'), 'search', [
    { attr: 'id', attrContent: 'townName' },
    { attr: 'placeholder', attrContent: 'Search a city...' },
    { attr: 'type', attrContent: 'search' },
    { attr: 'autocomplete', attrContent: 'off' },
    { attr: 'role', attrContent: 'combobox' },
    { attr: 'list', attrContent: 'select' },
  ])
  const rootTest = {
    component: headerSearchTest,
    children: [
      {
        component: formTest,
        children: [{ component: buttonSearchTest }, { component: inputTest }],
      },
    ],
  }
  buildTree(BodyContainerTest, rootTest)

  expect(BodyContainerTest.el).toMatchSnapshot()
})
