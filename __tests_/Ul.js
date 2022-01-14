const Block = require('./Block.js')

module.exports = class Ul extends Block {
  constructor(el, style, attr, attrContent, toHtml) {
    super(el, style, toHtml)
    this._attrContent = attrContent
    this._attr = attr
  }
  get el() {
    return this._el
  }
  addChild(elToMount) {
    this._el.appendChild(elToMount.el)
  }
  addAttribute() {
    this._el.setAttribute(this._attr, this._attrContent)
  }

  addClass() {
    this._el.classList.add(this._style)
  }
  removeChild(elToRemove) {
    if (elToRemove != undefined) {
      this._el.removeChild(elToRemove.el)
    }
  }
}
