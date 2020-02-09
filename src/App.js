import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Notfound from './Pages/Notfound'
import Viewallproducts from './Pages/Viewall-products'
import Viewcart from './Pages/Viewcart'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
          <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/Signup' component={Signup}></Route>
              <Route exact path='/Signin' component={Signin}></Route>
              <Route exact path='/Viewall-products' component={Viewallproducts}></Route>
              <Route exact path='/Viewcart' component={Viewcart}></Route>
              <Route exact component={Notfound} />
            </Switch>
      </Router>
    )
  }
}

export default App
