import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from './components/login/Login'
// import Home from './components/home/Home'
import Register from './components/login/Register'
import Movies from './components/Movies/Movies'
import Movie from './components/Movie/Movie'
import Series from './components/Series/Series'
import './App.css'
import './reset.css'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' exact component={Movies}/>
          <Route path='/register' component={Register}/>
          <Route path='/movies/:id' component={Movie}/>
          <Route path='/Series' component={Series}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
