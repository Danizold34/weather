const Block = require('./Block.js')
module.exports = class Li extends Block {
  constructor(el, style, attr, attrContent) {
    super(el, style)
    this._attrContent = attrContent
    this._attr = attr
  }
  get el() {
    return this._el
  }
  addAttribute() {
    this._el.setAttribute(this._attr, this._attrContent)
  }
  addContent(toHTML) {
    this._el.innerHTML = `${toHTML}`
  }
  addClass() {
    this._el.classList.add(this._style)
  }
  onClick(fn) {
    this._el.onclick = fn
  }
}
