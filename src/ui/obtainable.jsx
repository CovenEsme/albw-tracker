import _ from 'lodash';
import PropTypes from 'prop-types';
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
      incrementObtainable(obtainableName);
    };

    const decrementObtainableFunction = (event) => {
      event.preventDefault();
      decrementObtainable(obtainableName);
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

Obtainable.propTypes = {
  labelText: PropTypes.string.isRequired,
  obtainableName: PropTypes.string.isRequired,
  obtainableFancyName: PropTypes.string,
  obtainableImage: PropTypes.string.isRequired,
  incrementObtainable: PropTypes.func.isRequired,
  decrementObtainable: PropTypes.func.isRequired,
  setSelectedObtainable: PropTypes.func.isRequired,
  clearSelectedObtainable: PropTypes.func.isRequired,
};

export default Obtainable;
