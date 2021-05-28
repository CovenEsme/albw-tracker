import React from 'react';

class Obtainable extends React.Component {
  render() {
    const {
      image,
      obtainableName,
      incrementObtainable,
      decrementObtainable,
    } = this.props;

    const incrementObtainableFunction = (event) => {
      event.stopPropagation();
      incrementObtainable();
    };

    const decrementObtainableFunction = (event) => {
      event.preventDefault();
      decrementObtainable();
    };

    return (
      <div
        className="obtainable"
        onClick={incrementObtainableFunction}
        onContextMenu={decrementObtainableFunction}
        role="button"
      >
        <img id="progressive-sword"
             src={image}
             alt={obtainableName}
        />
      </div>
    )
  }
}

export default Obtainable;
