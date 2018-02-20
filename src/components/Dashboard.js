import React from 'react';

class Dashboard extends React.Component {
  render(){

    return (
      <div style={styles.container}>

        <div style={styles.placeholder}>
          <div>Edit /src/components/Dashboard.js</div>
          <div>Build your Dashboard.</div>
          <div>Check out the px-sample-app-react repo for examples on how to use px-components with React.</div>
          <div>
            <a href="https://github.com/predixdesignsystem/px-sample-app-react">
              https://github.com/predixdesignsystem/px-sample-app-react
            </a>
          </div>
          <div>Check out the sample app.</div>
          <div>
            <a href="https://react-starter-app.run.aws-usw02-pr.ice.predix.io/">
              https://react-starter-app.run.aws-usw02-pr.ice.predix.io
            </a>
          </div>
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
  placeholder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    color: 'black',
    textAlign: 'center',
    paddingBottom: '10em',
    background: 'white',
  }
}

export default Dashboard;