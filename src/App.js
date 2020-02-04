import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Signup' component={Signup}></Route>
          <Route exact path='/Signin' component={Signin}></Route>
        </div>
      </Router>
    )
  }
}

export default App
