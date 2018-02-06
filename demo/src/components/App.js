import React, { Component } from 'react';
import Home from './Home/Home'
import About from './About/About';
import People from './People/People'
import Company from './About/Company/Company'
import FAQ from './About/FAQ/FAQ'
import Character from './Character/Character'

import { Route, Switch, NavLink } from 'react-router-dom'

const NotFound = () => <div> Not fount 404 </div>;

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <NavLink exact activeClassName ='active-link' to='/'>Home</NavLink>
          <NavLink activeClassName ='active-link' to='/about'>About</NavLink>
          <NavLink activeClassName ='active-link' to='/people'>People</NavLink>
        </nav>

        <Switch>
          <Route path='/about' render={() => {
            return (
              <About>
                <Route path='/about/faq' component={FAQ}/>
                <Route path='/about/Company' component={Company}/>
              </About>
            )
          }}/>
          <Route path='/people/:id' component={ Character }/>
          <Route path='/people' component={People}/>
          
          
          <Route exact path='/' component={Home}/>
          <Route component={NotFound} />
        </Switch>


      </div>
    );
  }
}

export default App;
