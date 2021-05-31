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
    const obtainableFancyName = Helper.getFancyName(obtainableName,
                                        this.state.obtainables[obtainableName]);
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
      <div id="gear-obtainables">
        <div id="sword-block">
          {this.obtainable(Helper.GEAR.PROGRESSIVE_SWORD)}
          {this.obtainable(Helper.GEAR.PROGRESSIVE_MAIL)}
          {this.obtainable(Helper.GEAR.PROGRESSIVE_SHIELD)}
        </div>
        <div id="painting-block">
          {this.obtainable(Helper.GEAR.SAGE_GULLEY)}
          {this.obtainable(Helper.GEAR.SAGE_OREN)}
          {this.obtainable(Helper.GEAR.SAGE_ROSSO)}
          {this.obtainable(Helper.GEAR.SAGE_IMPA)}
          {this.obtainable(Helper.GEAR.SAGE_IRENE)}
          {this.obtainable(Helper.GEAR.SAGE_OSFALA)}
          {this.obtainable(Helper.GEAR.SAGE_SERES)}
        </div>
        <div id="pendant-block">
          {this.obtainable(Helper.GEAR.PENDANT_OF_POWER)}
          {this.obtainable(Helper.GEAR.PENDANT_OF_WISDOM)}
          {this.obtainable(Helper.GEAR.PENDANT_OF_COURAGE)}
        </div>
        <div id="accessory-block">
          {this.obtainable(Helper.GEAR.PROGRESSIVE_BRACELET)}
          {this.obtainable(Helper.GEAR.PROGRESSIVE_MITT)}
          {this.obtainable(Helper.GEAR.PEGASUS_BOOTS)}
          {this.obtainable(Helper.GEAR.ZORA_FLIPPERS)}
          {this.obtainable(Helper.GEAR.BEE_BADGE)}
          {this.obtainable(Helper.GEAR.STAMINA_SCROLL)}
        </div>
      </div>
    );
  }
}

export default GearTracker;
