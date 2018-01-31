import React from 'react';
import KeyValue from '../web-components/KeyValue';

class Dashboard extends React.Component {
  render(){
    const dropdownItems = `[{
      'key': '1',
      'val': 'No Refresh'
    }, {
      'key': '2',
      'val': 'Every 3 sec'
    }, {
      'key': '3',
      'val': 'Every 15 sec'
    }, {
      'key': '4',
      'val': 'Every 60 sec'
    }]`
    return (
      <div>
        {/* Context */}
        <div className='flex view-heading'>
          <KeyValue value='Dashboard' size='gamma'/>
          <px-dropdown
            items={dropdownItems}
            sort-mode='key'
            button-style='tertiary'
            display-value='Refresh Frequency'
            disable-clear>
          </px-dropdown>
        </div>

        <div className='flex kpis'>
          <KeyValue valueKey='Output (Avg)' value='0.049' uom='m/s' size='gamma' />
          <KeyValue valueKey='Compression Ratio (Avg)' value='2.75' uom='' size='gamma' />
          <KeyValue valueKey='Reliability' value='60' uom='%' size='gamma' />
          <KeyValue valueKey='Availability' value='85.0' uom='%' size='gamma' />
          <KeyValue valueKey='KPI Health' value='85' uom='%' size='gamma' />
        </div>

        <px-card header-text='Asset Status' icon='px-fea:asset'>
          {/* Add Data/Tables here */}
        </px-card>

      </div> 
    )
  }
}

export default Dashboard;