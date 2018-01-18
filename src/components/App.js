import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import AppNav from './AppNav';
import KeyValue from './KeyValue';
import About from './About';

class App extends Component {

  componentDidMount(){

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

    const dropdownItems = `[{
      "key": "1",
      "val": "No Refresh"
    }, {
      "key": "2",
      "val": "Every 3 sec"
    }, {
      "key": "3",
      "val": "Every 15 sec"
    }, {
      "key": "4",
      "val": "Every 60 sec"
    }]`

    const { navItems } = this.state;
    return (
      <div className="App">
        <px-branding-bar />
        
        {/* NavBar Component */}
        <AppNav items={navItems}/>

        <Route exact path="/" render={() => (
          <Redirect to="/rmd"/>
        )}/>

        <Route exact path="/rmd" render={()=>(
          <div>
            {/* Context */}
            <div className='flex view-heading'>
              <px-key-value-pair value="Dashboard" size="gamma"/>
              <px-dropdown
                items={dropdownItems}
                sort-mode="key"
                button-style="tertiary"
                display-value="Refresh Frequency"
                disable-clear>
              </px-dropdown>
            </div>

            <div className='flex kpis'>
              <KeyValue Key="Output (Avg)" Value="0.049" units="m/s" size="3" />
              <KeyValue Key="Compression Ratio (Avg)" Value="2.75" units="" size="3" />
              <KeyValue Key="Reliability" Value="60" units="%" size="3" />
              <KeyValue Key="Availability" Value="85.0" units="%" size="3" />
              <KeyValue Key="KPI Health" Value="85" units="%" size="3" />
            </div>

            <px-card header-text="Asset Status" icon="px-fea:asset">
              <px-data-table>
                <px-data-table-column name="index" type="html" />
                <px-data-table-column name="name" label="Alert Status" type="html"/>
                <px-data-table-column name="image" label="Delta to Threshold" type="html"/>
                <px-data-table-column name="date" label="Last Meter Reading" />
              </px-data-table>
            </px-card>
          </div>     
        )} /> 

        <Route exact path="/about" render={() => (
          <About />
        )}/>
      </div>
    );
  }
}

export default App;
