import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Store-Home';
import ProductPage from './Pages/Product';
import CategoryPage from './Pages/CategoryPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={CategoryPage} />
        <Route path='/products/:product' component={ProductPage} />
      </Switch>
    );
  }
}

export default App;
