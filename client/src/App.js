import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

class App extends Component {

  constructor(props) {
    super(props);

  }

  state = {
    product: 'Gloves',
    picture: 'https://www.roofmaster.com/wp-content/uploads/2017/04/413100glovesrgb-291x300.jpg',
    description: 'Heavy (12oz) Cotton glove in a Clute Style with a straight thumb and white knit wrist. One-size only',
    itemNumber: '000000'
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    );
  }
}

export default App;
