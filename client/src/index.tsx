import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import store from './app/store'
import { Provider } from 'react-redux'
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
