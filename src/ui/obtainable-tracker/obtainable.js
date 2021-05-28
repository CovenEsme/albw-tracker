import React from 'react';

class Obtainable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div className="obtainable">
        <img src={this.props.images[this.state.value]}
             alt={this.props.obtainableName}
             onClick={() => this.setState({value: this.state.value +1})} />
      </div>
    )
  }
}

export default Obtainable;
