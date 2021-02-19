import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import ProfileCard from './card/card'
import logo from '../images/atom.png'



class App extends Component {
  render() {
    console.log("Host URL" + process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"><Link to="/profile">React App</Link></h1>
          </header>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/" />
            )} />
            <Route exact path='/profile' component={ProfileCard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
