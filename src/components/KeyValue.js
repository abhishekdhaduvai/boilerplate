import React from 'react';

class KeyValue extends React.Component {

  render(){
    const { Key, Value, units, size } = this.props;
    console.log(this.props);
    return (
      <div style={styles.container}>
        <div>
          {Key}
        </div>
        <div style={{display: 'flex'}}>
          <div style={{fontSize: `${size}em`}}>
            {Value}
          </div>
          <div style={styles.units}>
            {units}
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'left'
  },
  units: {
    alignSelf: 'flex-end',
    marginBottom: '0.7em',
    marginLeft: '0.3em',
  }
}

export default KeyValue;