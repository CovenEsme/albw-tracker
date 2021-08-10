import _ from 'lodash';
import React from 'react';

import Helper from '../services/helper';
import Images from '../services/images';
import Obtainable from './obtainable';

import '../css/styles.scss';

class ItemsTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      obtainables: Helper.getEmptyItems(),
      selectedObtainable: null,
    };

    this.setSelectedObtainable   = this.setSelectedObtainable.bind(this);
    this.clearSelectedObtainable = this.clearSelectedObtainable.bind(this);
  }

  setSelectedObtainable(obtainableName) {
    this.setState({selectedObtainable: obtainableName});
  }

  clearSelectedObtainable() {
    this.setState({selectedObtainable: null});
  }

  selectedObtainable() {
    const {selectedObtainable} = this.state;

    return (
      <div id="items-label-text">{selectedObtainable}</div>
    )
  }

  handleClick(increment, obtainableName) {
    const updatedObtainables = this.state.obtainables;
    const maxCount = Helper.getMaxItemsCount(obtainableName);

    let newCount = updatedObtainables[obtainableName];

    if (increment) {newCount++;}
    else           {newCount--;}

    if (newCount > maxCount) {newCount = 0;}
    else if (newCount < 0)   {newCount = maxCount;}

    updatedObtainables[obtainableName] = newCount;
    this.setState({obtainables: updatedObtainables});
    this.setSelectedObtainable(Helper.getFancyName(obtainableName, newCount));
  }

  obtainable(obtainableName) {
    const obtainableFancyName = Helper.getFancyName(obtainableName,
                                        this.state.obtainables[obtainableName]);
    const obtainableImages = _.get(Images.IMAGES, ['ITEMS', obtainableName]);
    const obtainableImage = _.get(obtainableImages,
                                  this.state.obtainables[obtainableName]);

    return (
      <Obtainable
        obtainableName={obtainableName}
        obtainableFancyName={obtainableFancyName}
        obtainableImage={obtainableImage}
        incrementObtainable={() => this.handleClick(true, obtainableName)}
        decrementObtainable={() => this.handleClick(false, obtainableName)}
        setSelectedObtainable={this.setSelectedObtainable}
        clearSelectedObtainable={this.clearSelectedObtainable}
      />
    );
  }

  render() {
    return (
      <div className="items-tracker">
        <img
          id="items-overlay"
          src={_.get(Images.IMAGES, 'ITEMS_OVERLAY')}
          alt="Items overlay"
          draggable={false}
        />
        <div className="items-label">
          <img
            id="items-label-image"
            src={_.get(Images.IMAGES, 'ITEMS_LABEL')}
            alt="Items label"
            draggable={false}
          />
          {this.selectedObtainable()}
        </div>
        <div id="item-obtainables">
          {this.obtainable(Helper.ITEMS.PROGRESSIVE_LAMP)}
          {this.obtainable(Helper.ITEMS.PROGRESSIVE_BOW)}
          {this.obtainable(Helper.ITEMS.PROGRESSIVE_TROD)}
          {this.obtainable(Helper.ITEMS.PROGRESSIVE_HAMMER)}
          {this.obtainable(Helper.ITEMS.PROGRESSIVE_BOMBS)}
          {this.obtainable(Helper.ITEMS.PROGRESSIVE_BOOMERANG)}
          {this.obtainable(Helper.ITEMS.PROGRESSIVE_HOOKSHOT)}
          {this.obtainable(Helper.ITEMS.PROGRESSIVE_IROD)}
          {this.obtainable(Helper.ITEMS.PROGRESSIVE_SROD)}
          {this.obtainable(Helper.ITEMS.PROGRESSIVE_FROD)}
          {this.obtainable(Helper.ITEMS.PROGRESSIVE_NET)}

          {this.obtainable(Helper.ITEMS.HINT_GLASSES)}
          {this.obtainable(Helper.ITEMS.BOW_OF_LIGHT)}
          {this.obtainable(Helper.ITEMS.SCOOT_FRUIT)}
          {this.obtainable(Helper.ITEMS.FOUL_FRUIT)}

          {this.obtainable(Helper.ITEMS.NOTE_BOTTLE)}
          {this.obtainable(Helper.ITEMS.BOTTLE_ONE)}
          {this.obtainable(Helper.ITEMS.BOTTLE_TWO)}
          {this.obtainable(Helper.ITEMS.BOTTLE_THREE)}
          {this.obtainable(Helper.ITEMS.BOTTLE_FOUR)}
        </div>
      </div>
    );
  }
}

export default ItemsTracker;
