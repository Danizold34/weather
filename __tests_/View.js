const Block = require('./Block.js')

module.exports = class View extends Block {
  constructor(el, style) {
    super(el, style)
  }
  get el() {
    return this._el
  }

  addContent(toHTML) {
    this._el.innerHTML = `${toHTML}`
  }

  addClass() {
    this._el.classList.add(this._style)
  }
}
