import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp() {
  return (
    <h3>Hello i am from my app</h3>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherVarable="Kaluram"
const ReactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: "_blank" },
  'Click me to visit google',
  anotherVarable
)
const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)
createRoot(document.getElementById('Kaluram')).render(
  // <StrictMode>
  // MyApp()
  ReactElement
  // anotherElement
  // <App />
  // </StrictMode>,
)
