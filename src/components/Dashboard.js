import React from 'react';
import KeyValue from '../web-components/KeyValue';

class Dashboard extends React.Component {
  render(){
    return (
      <div style={styles.container}>

        {/* Context */}
        <div style={styles.heading}>
          <KeyValue value='Dashboard' size='gamma'/>
        </div>

        <div style={styles.kpi}>
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

const styles = {
  container: {
    flex: 1
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em',
    paddingTop: '2em',
    marginLeft: '1em',
  },
  kpi: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em 1em',
    paddingRight: '15em',
    marginLeft: '1em',
  }
}

export default Dashboard;