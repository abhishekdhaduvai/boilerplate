import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Link, Switch } from 'react-router-dom';
import AppNav from './components/AppNav';
import KeyValue from './components/KeyValue';
import About from './components/About';
import Dashboard from './components/Dashboard';

class App extends Component {

  componentDidMount(){
    fetch("/test")
    .then(res => {
      console.log("FETCHED DATA ", res.data);
    })
    .catch(err => {
      console.log("ERROR!!!!", err);
    })
  }

  state = {
    navItems: [
    {
      "label": "Asset Monitoring",
      "id": "rmd",
      "icon": "line-chart"
    }, 
    {
      "label": "About",
      "id": "about",
      "icon": "book"
    }]
  }

  render() {
    const { navItems } = this.state;

    return (
      <div className="App">

        <px-branding-bar />
        
        {/* NavBar Component */}
        <AppNav items={navItems}/>

        {/* Setting initial path */}
        <Redirect to="/rmd" />

        <Switch>
          <Route exact path="/rmd" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route path="/" component={Dashboard} />
        </Switch>

      </div>
    );
  }
}

export default App;
