const buildTree = (main_el, tree) => {
  const currentComponent = tree.component

  main_el.addChild(currentComponent)
  currentComponent.addClass()
  if (currentComponent._toHtml != undefined) {
    currentComponent.addContent()
  }
  if (currentComponent._attr != undefined) {
    currentComponent.addAttribute()
  }
  if (tree.children && tree.children.length !== 0) {
    tree.children.forEach((treeItem) => {
      buildTree(currentComponent, treeItem)
    })
  } else return
}
module.exports = buildTree
