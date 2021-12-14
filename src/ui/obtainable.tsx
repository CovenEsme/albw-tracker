import _ from 'lodash';
import React from 'react';

interface ObtainableInterface {
    labelText:               string,
    obtainableName:          string,
    obtainableFancyName?:    string,
    obtainableImage:         string,
    incrementObtainable:     (obtainableName: string) => void,
    decrementObtainable:     (obtainableName: string) => void,
    setSelectedObtainable:   (obtainableFancyName?: string) => void,
    clearSelectedObtainable: () => void,
}

class Obtainable extends React.Component<ObtainableInterface> {
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

    function incrementObtainableFunction(event: any) {
      event.stopPropagation();
      incrementObtainable(obtainableName);
    };

    function decrementObtainableFunction(event: any) {
      event.preventDefault();
      decrementObtainable(obtainableName);
    };

    function setSelectedObtainableFunction() {
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
