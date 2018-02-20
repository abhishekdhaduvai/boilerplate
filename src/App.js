import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import AppNav from './web-components/AppNav';
import BrandingBar from './web-components/BrandingBar';
import About from './components/About';
import Dashboard from './components/Dashboard';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      navItems: [
        {
          "label": "Asset Monitoring",
          "icon": "px-fea:analytics",
          "id": "dashboard"
        },
        {
          "label": "About",
          "icon": "px-com:message",
          "id": "about"
        }
      ],
      currentRoute: null,
    }
  }

  componentWillMount() {
    if (this.props.location.pathname) {
      this.syncURLToRoute(this.props.location.pathname);
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.syncURLToRoute(nextProps.location.pathname);
    }
  }

  syncURLToRoute(url) {
    this.setState({currentRoute: [url.slice(1)]})
  }

  syncRouteToURL = (route) => {
    const pathname = `/${route.join('/')}`;
    if (this.props.location.pathname !== pathname) {
      this.props.history.push(pathname);
    }
  }

  render() {
    const { navItems } = this.state;

    return (
      <div style={styles.container}>

        <BrandingBar applicationTitle='React Starter Application' />

        <div style={styles.nav}>
          {/* NavBar Component */}
          <AppNav 
            items={navItems}
            selectedRoute={this.state.currentRoute}
            onSelectedRouteChanged={route => this.syncRouteToURL(route)}>
          </AppNav>
          <px-login style={styles.login} />
        </div>

        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route path="/" render={() => {
            return <Redirect to="/dashboard" />
          }}/>
        </Switch>

      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  login: {
    paddingTop: '15px', 
    paddingRight: '1em', 
    background:'#0c1419'
  },
  nav: {
    display: 'flex',
    overflow: 'hidden'
  }
}

export default withRouter(App);
