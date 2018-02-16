import React from 'react';
import KeyValue from '../web-components/KeyValue';
import DataTable from '../web-components/DataTable';

class Dashboard extends React.Component {
  render(){
    const tableData = [{
      "tag": "crank-frame-compressionratio",
      "delta to threshold": "8.71%",
      "last meter reading": "2017-03-09 15:59:57 -0800",
        "current value": "2.739",
        "units": "",
        "threshold min": "2.5",
        "threshold max": "3"
    }, {
      "tag": "crank-frame-dischargepressure",
      "delta to threshold": " 27.10%",
      "last meter reading": "2017-03-09 15:59:57 -0800",
      "current value": "16.768",
      "units": "psi",
      "threshold min": "0",
      "threshold max": "23"
    }, {
      "tag": "crank-frame-suctionpressure",
      "delta to threshold": "20.73%",
      "last meter reading": "2017-03-09 15:59:57 -0800",
      "current value": "0.044",
      "units": "psi",
      "threshold min": "0",
      "threshold max": "0.21"
    }, {
      "tag": "crank-frame-maxpressure",
      "delta to threshold": " 11.17%",
      "last meter reading": "2017-03-09 15:59:57 -0800",
      "current value": "23.095",
      "units": "psi",
      "threshold min": "22",
      "threshold max": "26"
    }, {
      "tag": "crank-frame-velocity",
      "delta to threshold": " 45.87%",
      "last meter reading": "2017-03-09 15:59:57 -0800",
      "current value": "0.038",
      "units": "m/s",
      "threshold min": "0",
      "threshold max": "0.07"
    }, {
      "tag": "crank-frame-temperature",
      "delta to threshold": "4.43%",
      "last meter reading": "2017-03-09 15:59:57 -0800",
      "current value": "81.458",
      "units": "F",
      "threshold min": "65",
      "threshold max": "80"
    }]
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