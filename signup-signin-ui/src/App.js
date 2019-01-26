import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import signUpForm from './pages/signUpForm';
import signInForm from './pages/signInForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
            
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink to="/" exact activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div> 

            <div className="FormTitle">
              <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> Or 
              <NavLink to="/" exact activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>

            <Route exact path="/" component={signUpForm}></Route>
            <Route path="/sign-in" component={signInForm}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
