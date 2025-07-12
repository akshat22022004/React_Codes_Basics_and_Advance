function  customRender(reactElement, mainContainer) {
    /*
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   domElement.setAttribute('href', reactElement.props.href)
   domElement.setAttribute('target', reactElement.props.target) 

   mainContainer.appendChild(domElement)
   */
   const domElement  =  document.createElement(reactElement.type)
   domElement.innerHtml = reactElement.children

   for (const key in reactElement.props) {
    if (key === 'children') {
        continue;
    }
    domElement.setAttribute(key, reactElement.props[key])
   }
   mainContainer.appendChild(domElement)

}
const reactElement = {
    type: 'a',
    props : {
        href: 'https://reactjs.org',
        target: '_blank',
        children: 'Learn React'
    },
    children: 'Click me to visit React website'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)

