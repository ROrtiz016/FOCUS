import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Register from './components/login/Register'
import Movies from './components/Movies/Movies'
import Movie from './components/Movie/Movie'
import Users from './components/Users/Users'
import MovieList from './components/Movies/MovieList'
import './App.css'
import './reset.css'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' component={Login} exact/>
          <Route path='/home' component={Home}/>
          <Route path='/register' component={Register}/>
          <Route path='/movies' exact component={Movies}/>
          <Route path='/movies/:id' component={Movie}/>
          <Route path='/users' component={Users}/>
          <Route path='/List' component={MovieList}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
