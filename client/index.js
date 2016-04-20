import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'



const rootElement = document.getElementById('app')

render(
  <Provider>
    Hello
  </Provider>,
  document.getElementById('app')
)
