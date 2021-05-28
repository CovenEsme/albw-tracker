import React from 'react';

class Obtainable extends React.Component {
  render() {
    return (
      <div className="obtainable">
        <img src={this.props.image} alt={this.props.obtainableName}
             onClick={() => alert('Click')}/>
      </div>
    )
  }
}

export default Obtainable;
