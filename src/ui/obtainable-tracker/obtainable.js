import React from 'react';

class Obtainable extends React.Component {
  render() {
    const {
      obtainableName,
      obtainableFancyName,
      obtainableImage,
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
        <img
          id={obtainableName}
          src={obtainableImage}
          alt={obtainableFancyName}
          draggable={false}
        />
      </div>
    )
  }
}

export default Obtainable;
