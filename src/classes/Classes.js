export class Block {
  constructor(el, style, toHtml) {
    this._el = el
    this._style = style
    this._toHtml = toHtml
  }

  AddContent() {
    throw new Error('nothing to add')
  }
  AddClass() {
    throw new Error('nothing to add!')
  }
  render = () => {
    throw new Error('nothing to render')
  }
}
export class Container extends Block {
  constructor(el, style, attr, attrContent) {
    super(el, style)
    this._attrContent = attrContent
    this._attr = attr
  }
  get el() {
    return this._el
  }
  render = (elToMount) => {
    this._el.appendChild(elToMount.el)
  }
  AddClass() {
    this._el.classList.add(this._style)
  }

  AddAttribute() {
    this._el.setAttribute(this._attr, this._attrContent)
  }
}
export class View extends Block {
  constructor(el, style, toHtml) {
    super(el, style, toHtml)
  }
  get el() {
    return this._el
  }

  AddContent() {
    this._el.innerHTML = `${this._toHtml}`
  }
  AddClass() {
    this._el.classList.add(this._style)
  }
}

export class Button extends Block {
  constructor(el, style, attr, attrContent, toHtml) {
    super(el, style, toHtml)
    this._attrContent = attrContent
    this._attr = attr
  }
  get el() {
    return this._el
  }
  render = (elToMount) => {
    this._el.appendChild(elToMount.el)
  }
  AddAttribute() {
    this._el.setAttribute(this._attr, this._attrContent)
  }
  AddContent() {
    this._el.innerHTML = `${this._toHtml}`
  }
  AddClass() {
    this._el.classList.add(this._style)
  }
}

export class Input extends Block {
  constructor(el, style, attr) {
    super(el, style)
    this._attr = attr
  }
  get el() {
    return this._el
  }
  AddClass() {
    this._el.classList.add(this._style)
  }
  AddContent() {
    console.log('xxppxpx')
  }
  AddAttribute() {
    this._attr.forEach((item) => {
      this._el.setAttribute(item.attr, item.attrContent)
    })
  }
}
