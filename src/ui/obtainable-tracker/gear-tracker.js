import _ from 'lodash';
import React from 'react';

import Helper from '../../services/helper';
import Images from '../../services/images';
import Obtainable from './obtainable';

import '../../css/styles.css';

class GearTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      obtainables: Helper.getEmptyGear(),
    };
  }

  handleClick(increment, obtainableName) {
    const updatedObtainables = this.state.obtainables;
    const maxCount = Helper.getMaxCount(obtainableName);

    let newCount = updatedObtainables[obtainableName];

    if (increment) {
      newCount++;
    }
    else {
      newCount--;
    }

    if (newCount > maxCount) {
      newCount = 0;
    }
    else if (newCount < 0) {
      newCount = maxCount;
    }

    updatedObtainables[obtainableName] = newCount;

    this.setState({obtainables: updatedObtainables});
  }

  obtainable(obtainableName) {
    const obtainableFancyName = _.get(Helper.getFancyName(obtainableName,
                                        this.state.obtainables[obtainableName]))
    const obtainableImages = _.get(Images.IMAGES, ['GEAR', obtainableName]);
    const obtainableImage = _.get(obtainableImages,
                                  this.state.obtainables[obtainableName]);

    return (
      <Obtainable
        obtainableName={obtainableName}
        obtainableFancyName={obtainableFancyName}
        obtainableImage={obtainableImage}
        incrementObtainable={() => this.handleClick(true, obtainableName)}
        decrementObtainable={() => this.handleClick(false, obtainableName)}
      />
    );
  }

  render() {
    return (
        <div id="sword-block">
          {this.obtainable(Helper.GEAR.PROGRESSIVE_SWORD)}
        </div>
    );
  }
}

export default GearTracker;
