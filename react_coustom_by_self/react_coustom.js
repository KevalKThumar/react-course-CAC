function coustomReactApp(reactElement, container) {
    /**
     * 1st APPROCH
        const elementForDom = document.createElement(reactElement.type)
        elementForDom.innerHTML = reactElement.children
        elementForDom.setAttribute('href', reactElement.props.href)
        elementForDom.setAttribute('target', reactElement.props.target)
        container.appendChild(elementForDom)
    */
    /**
     * 2nd APPROCH
    
           const elementForReact = document.createElement(reactElement.type)
           elementForReact.innerHTML = reactElement.children
           for (const prop in reactElement.props) {
               if (prop === 'children') {
                   continue
               }
               elementForReact.setAttribute(prop, reactElement.props[prop])
           }
   
           container.appendChild(elementForReact)
    */

}

const mainContainer = document.getElementById('root')

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to naviget Google.com"
}

coustomReactApp(reactElement, mainContainer)
