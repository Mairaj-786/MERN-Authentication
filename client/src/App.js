import React from 'react'
import Store from './store'
import { Provider } from 'react-redux';
import Register from './store/components/Register';
import Home from './store/components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './store/components/Navbar';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/register' component={Register}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
