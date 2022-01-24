const Block = require('./Block.js')

module.exports = class Input extends Block {
  constructor(el, style, attr) {
    super(el, style)
    this._attr = attr
  }
  get el() {
    return this._el
  }
  addClass() {
    this._el.classList.add(this._style)
  }

  addAttribute() {
    this._attr.forEach((item) => {
      this._el.setAttribute(item.attr, item.attrContent)
    })
  }
}
