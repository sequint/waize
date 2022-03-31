import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'
import {store} from './app/store'
import App from './app/App'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <Provider store={store}>
        <App />
      </Provider>
      
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
)
