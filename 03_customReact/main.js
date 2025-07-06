function newElement(reactElement) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = `<h1>${reactElement.children}</h1>`;
    for  (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    rootElement.appendChild(domElement);
}


const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank',
        alt : 'Google Website',
    },
    children : 'This is React.js',
}

const rootElement = document.getElementById('root');

newElement(reactElement);