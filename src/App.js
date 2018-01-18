import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import AppNav from './components/AppNav';
import About from './components/About';
import Dashboard from './components/Dashboard';
import axios from 'axios';

class App extends Component {

  componentDidMount(){
    axios.get('/userinfo')
    .then(res => {
      console.log(res.data)
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
        <div style={{display: 'flex'}}>
          <AppNav items={navItems}/>
          <px-login style={styles.login} />
        </div>

        <Switch>
          <Route exact path="/rmd" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route path="/" render={() => {
            return <Redirect to="/rmd" />
          }}/>
        </Switch>

      </div>
    );
  }
}

const styles = {
  login: {
    paddingTop: '10px', 
    paddingRight: '10px', 
    background:'#0c1419'
  }
}

export default App;
