/**
 * @jest-environment jsdom
 */

const Container = require('./Container.js')
const Button = require('./Button.js')
const View = require('./View.js')
const Input = require('./Input.js')
const Ul = require('./Ul.js')
const Li = require('./Li.js')

it('Check methods of Container Class', () => {
  const testContainer = new Container(
    document.createElement('div'),
    'container',
    'id',
    'test-container'
  )
  const testChildOfContainer = new Container(
    document.createElement('div'),
    'test-child-of-container',
    'id',
    'testId'
  )
  const testCreateDomElementWithAttribute = () => {
    testContainer.addAttribute()
    testChildOfContainer.addClass()
    testContainer.addChild(testChildOfContainer)
    testContainer.addClass()
    return { value: testContainer.el }
  }
  const testRemoveChildElement = () => {
    testContainer.removeChild(testChildOfContainer)
    return { value: testContainer.el }
  }
  expect(testCreateDomElementWithAttribute()).toMatchSnapshot(
    '<div class="container" id="test-container"><div class="test-child-of-container"></div></div>'
  )
  expect(testRemoveChildElement()).toMatchSnapshot(
    '<div class="container" id="test-container"></div>'
  )
})
it('Check methods of Button Class', () => {
  const testButton = new Button(
    document.createElement('a'),
    'test-container',
    'href',
    '#/',
    '<span> Hi People</span>'
  )
  const testChildOfContainer = new Button(
    document.createElement('div'),
    'test-child-of-container'
  )
  const testCreateDomElementWithAttribute = () => {
    testButton.addAttribute()
    testButton.addChild(testChildOfContainer)
    testButton.addClass()
    testButton.addContent()
    return { value: testButton.el }
  }
  expect(testCreateDomElementWithAttribute()).toMatchSnapshot(
    '<a class="container"id="test-container"><span>Hi People</span></a>'
  )
})
it('Check methods of View Class', () => {
  const testViewBlock = new View(
    document.createElement('div'),
    'test-view-block'
  )

  const testCreateDomElementWithAttribute = () => {
    testViewBlock.addClass()
    testViewBlock.addContent('<span> Hi People</span>')
    return { value: testViewBlock.el }
  }
  expect(testCreateDomElementWithAttribute()).toMatchSnapshot(
    '<div class="test-view-block"><span> Hi People</span></div>'
  )
})

it('Check methods of Input Class', () => {
  const testInputBlock = new Input(
    document.createElement('input'),
    'test-input',
    [
      { attr: 'id', attrContent: 'townName' },
      { attr: 'placeholder', attrContent: 'Search a city...' },
      { attr: 'type', attrContent: 'search' },
      { attr: 'autocomplete', attrContent: 'off' },
      { attr: 'role', attrContent: 'combobox' },
      { attr: 'list', attrContent: 'select' },
    ]
  )

  const testCreateDomElementWithAttribute = () => {
    testInputBlock.addClass()
    testInputBlock.addAttribute()
    return { value: testInputBlock.el }
  }
  expect(testCreateDomElementWithAttribute()).toMatchSnapshot(
    '<input autocomplete="off" class="test-input"id="townName"list="select"placeholder="Search a city..."role="combobox"type="search"/>'
  )
})
it('Check methods of Ul Class', () => {
  const testUlBlock = new Ul(
    document.createElement('ul'),
    'test-ul-for-search',
    'role',
    'listbox'
  )
  const testChildOfContainer = new Container(
    document.createElement('div'),
    'test-child-of-container',
    'id',
    'testId'
  )
  const testCreateDomElementWithAttribute = () => {
    testChildOfContainer.addClass()
    testUlBlock.addClass()
    testUlBlock.addAttribute()
    testUlBlock.addChild(testChildOfContainer)

    return { value: testUlBlock.el }
  }
  const testRemoveChildElement = () => {
    testUlBlock.removeChild(testChildOfContainer)
    return { value: testUlBlock.el }
  }
  expect(testCreateDomElementWithAttribute()).toMatchSnapshot('')
  expect(testRemoveChildElement()).toMatchSnapshot('')
})
it('Check methods of Li Class', () => {
  const testLiBlock = new Li(
    document.createElement('li'),
    'li-test',
    'role',
    'presentation'
  )

  const testCreateDomElementWithAttribute = () => {
    testLiBlock.addClass()
    testLiBlock.addAttribute()
    testLiBlock.addContent('<span>TownName</span>')
    return { value: testLiBlock.el }
  }
  expect(testCreateDomElementWithAttribute()).toMatchSnapshot()
})
