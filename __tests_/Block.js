module.exports = class Block {
  constructor(el, style, toHtml) {
    this._el = el
    this._style = style
    this._toHtml = toHtml
  }

  addContent() {
    throw new Error('this method doesn`t implemented')
  }
  addClass() {
    throw new Error('this method doesn`t implemented')
  }
  addChild() {
    throw new Error('this method doesn`t implemented')
  }
  removeChild() {
    throw new Error('this method doesn`t implemented')
  }
}
