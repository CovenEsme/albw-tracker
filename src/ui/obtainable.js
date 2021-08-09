import _ from 'lodash';

import React from 'react';

class Obtainable extends React.Component {
  render() {
    const {
      obtainableName,
      obtainableFancyName,
      obtainableImage,
      incrementObtainable,
      decrementObtainable,
      setSelectedObtainable,
      clearSelectedObtainable,
    } = this.props;

    const incrementObtainableFunction = (event) => {
      event.stopPropagation();
      incrementObtainable();
    };

    const decrementObtainableFunction = (event) => {
      event.preventDefault();
      decrementObtainable();
    };

    const setSelectedObtainableFunction = () => {
      setSelectedObtainable(obtainableFancyName);
    };

    return (
      <div
        className="obtainable"
        onClick={incrementObtainableFunction}
        onContextMenu={decrementObtainableFunction}
        onMouseOver={setSelectedObtainableFunction}
        onMouseOut={clearSelectedObtainable}
        role="button"
      >
        <img
          className={_.toLower(_.snakeCase(obtainableName))}
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
