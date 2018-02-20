import React from 'react';

class Dashboard extends React.Component {
  render(){

    return (
      <div style={styles.container}>

        {/* Context */}
        <div style={styles.heading}>
          Dashboard
        </div>

        <div style={styles.placeholder}>
          <div>Edit /src/components/Dashboard.js</div>
          <div>Build your Dashboard</div>
        </div>

      </div> 
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  heading: {
    display: 'flex',
    padding: '1em 1em 0em 0em',
    marginLeft: '1em',
    fontSize: '2rem',
    lineHeight: '1.33333',
    fontEeight: 'normal',
    color: '#b6c3cc',
  },
  placeholder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    color: '#b6c3cd',
    textAlign: 'center',
    paddingBottom: '10em',
  }
}

export default Dashboard;