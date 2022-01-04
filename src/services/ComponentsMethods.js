export const buildTree = (main_el, tree) => {
  const currentComponent = tree.component

  console.log(main_el)
  main_el.render(currentComponent)
  currentComponent.AddClass()
  if (currentComponent._toHtml != undefined) {
    currentComponent.AddContent()
  }
  if (currentComponent._attr != undefined) {
    currentComponent.AddAttribute()
    console.log(currentComponent)
  }
  if (tree.children && tree.children.length !== 0) {
    tree.children.forEach((treeItem) => {
      buildTree(currentComponent, treeItem)
    })
  } else return
}
