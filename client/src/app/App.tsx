import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from '../pages/Home'
import Waize from '../pages/Waize'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/waize'>
            <Waize />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
