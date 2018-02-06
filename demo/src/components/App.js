import React, { Component } from 'react';
import Home from './Home/Home'
import About from './About/About';
import People from './People/People'

import { Route, Switch, Link } from 'react-router-dom'

const NotFound = () => <div> Not fount 404 </div>;

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/people'>People</Link>
        </nav>

        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/people' component={People}/>
          <Route exact path='/' component={Home}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
