const Block = require('./Block.js')

module.exports = class Button extends Block {
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
  addContent() {
    this._el.innerHTML = `${this._toHtml}`
  }
  addClass() {
    this._el.classList.add(this._style)
  }
  onClick(fn) {
    this._el.onclick = fn
  }
}
