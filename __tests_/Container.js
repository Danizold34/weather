const Block = require('./Block.js')

module.exports = class Container extends Block {
  constructor(el, style, attr, attrContent) {
    super(el, style)
    this._attrContent = attrContent
    this._attr = attr
  }
  get el() {
    return this._el
  }
  addChild(elToMount) {
    this._el.appendChild(elToMount.el)
  }
  addClass() {
    this._el.classList.add(this._style)
  }

  addAttribute() {
    this._el.setAttribute(this._attr, this._attrContent)
  }
  removeChild(elToRemove) {
    console.log('elToRemove', elToRemove)
    this._el.removeChild(elToRemove.el)
  }
}
