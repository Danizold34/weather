export class Block {
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
  addChild = () => {
    throw new Error('this method doesn`t implemented')
  }
  removeChild = () => {
    throw new Error('this method doesn`t implemented')
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
  addChild = (elToMount) => {
    this._el.appendChild(elToMount.el)
  }
  addClass = () => {
    this._el.classList.add(this._style)
  }

  addAttribute = () => {
    this._el.setAttribute(this._attr, this._attrContent)
  }
  removeChild = (elToRemove) => {
    this._el.removeChild(elToRemove.el)
  }
}
export class View extends Block {
  constructor(el, style) {
    super(el, style)
  }
  get el() {
    return this._el
  }

  addContent = (toHTML) => {
    this._el.innerHTML = `${toHTML}`
  }

  addClass = () => {
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
  addChild = (elToMount) => {
    this._el.appendChild(elToMount.el)
  }
  addAttribute = () => {
    this._el.setAttribute(this._attr, this._attrContent)
  }
  addContent = () => {
    this._el.innerHTML = `${this._toHtml}`
  }
  addClass = () => {
    this._el.classList.add(this._style)
  }
  onClick = (fn) => {
    this._el.onclick = fn
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
  addClass = () => {
    this._el.classList.add(this._style)
  }

  addAttribute = () => {
    this._attr.forEach((item) => {
      this._el.setAttribute(item.attr, item.attrContent)
    })
  }
}

export class Ul extends Block {
  constructor(el, style, attr, attrContent, toHtml) {
    super(el, style, toHtml)
    this._attrContent = attrContent
    this._attr = attr
  }
  get el() {
    return this._el
  }
  addChild = (elToMount) => {
    this._el.appendChild(elToMount.el)
  }
  addAttribute = () => {
    this._el.setAttribute(this._attr, this._attrContent)
  }
  addContent = () => {
    this._el.innerHTML = `${this._toHtml}`
  }
  addClass = () => {
    this._el.classList.add(this._style)
  }
  removeChild = (elToRemove) => {
    if (elToRemove != undefined) {
      this._el.removeChild(elToRemove.el)
    }
  }
}
export class Li extends Block {
  constructor(el, style, attr, attrContent) {
    super(el, style)
    this._attrContent = attrContent
    this._attr = attr
  }
  get el() {
    return this._el
  }
  addAttribute = () => {
    this._el.setAttribute(this._attr, this._attrContent)
  }
  addContent = (toHTML) => {
    this._el.innerHTML = `${toHTML}`
  }
  addClass = () => {
    this._el.classList.add(this._style)
  }
  onClick = (fn) => {
    this._el.onclick = fn
  }
}
