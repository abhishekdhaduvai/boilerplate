import React from 'react';
import { Route, Redirect, Link, Switch } from 'react-router-dom';
import AppNav from './AppNav';
import KeyValue from './KeyValue';

class Dashboard extends React.Component {
  render(){
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
    return (
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
          {/* Add Data/Tables here */}
        </px-card>

      </div> 
    )
  }
}

export default Dashboard;