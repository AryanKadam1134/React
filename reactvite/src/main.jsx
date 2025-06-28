import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
 
// To create an element in React, we can use JSX syntax.
// JSX is a syntax extension that allows us to write HTML-like code within JavaScript.
// It is then transformed into React elements by the build tools.
const element = (<a href="https://www.google.com" target="_blank" alt="Google Website">This is React.js</a> );

// Alternatively, we can also create elements using React.createElement method.
// This method takes three arguments: the type of element, an object with properties, and the children of the element.
// This is useful when we want to create elements dynamically or when we are not using JSX.
const newElement = React.createElement(
  'a',
  {
  href: 'https://www.google.com',
  target: '_blank',
  alt: 'Google Website',
  },
  'This is React.js',
  element
)
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* {element} */}
    {newElement}
  </StrictMode>,
)
