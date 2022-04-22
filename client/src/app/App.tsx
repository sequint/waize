import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from '../pages/Home'
import Waize from '../pages/Waize'
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/waize'>
            <Home />
          </Route>
          <Route path='/waizeVR'>
            <Waize />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
