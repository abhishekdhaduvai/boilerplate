import React from 'react';
import KeyValue from '../web-components/KeyValue';
import DataTable from '../web-components/DataTable';

class Dashboard extends React.Component {
  render(){
    const tableData = [{"first":"Valentine","last":"Meyer","email":"valentinemeyer@scentric.com"},{"first":"Silva","last":"Alexander","email":"silvaalexander@gmail.com"},{"first":"Hopkins","last":"Wong","email":"hopkinswong@hotmail.com"},{"first": "Joe","last": "Sherman","email": "joejoe@yahoo.com"},{"first": "Jane","last": "Bartlett","email": "jane@scentric.com"}]
    return (
      <div style={styles.container}>

        {/* Context */}
        <div style={styles.heading}>
          Dashboard
        </div>

        <div style={styles.kpiContainer}>
          <KeyValue valueKey='Output (Avg)' value='0.049' uom='m/s' size='gamma' />
          <KeyValue valueKey='Compression Ratio (Avg)' value='2.75' uom='' size='gamma' />
          <KeyValue valueKey='Reliability' value='60' uom='%' size='gamma' />
          <KeyValue valueKey='Availability' value='85.0' uom='%' size='gamma' />
          <KeyValue valueKey='KPI Health' value='85' uom='%' size='gamma' />
        </div>

        <px-card header-text='Asset Status' icon='px-fea:asset'>
          <DataTable tableData={tableData}></DataTable>
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
    padding: '1em 1em 0em 0em',
    marginLeft: '1em',
    fontSize: '2rem',
    lineHeight: '1.33333',
    fontEeight: 'normal',
    color: '#b6c3cc',
  },
  kpiContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em 2em 1em 2em',
    overflow: 'scroll',
    whiteSpace: 'nowrap',
  },
  kpi: {
    minWidth: '10em'
  }
}

export default Dashboard;