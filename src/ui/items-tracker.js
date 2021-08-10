import _ from 'lodash';
import React from 'react';

import Helper from '../services/helper';
import Images from '../services/images';
import Obtainable from './obtainable';
import Table from './table';

class ItemsTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      obtainables: Helper.getEmptyItems(),
    };
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
    this.props.setSelectedObtainable(Helper.getFancyName(obtainableName, newCount));
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
        setSelectedObtainable={() => this.props.setSelectedObtainable(obtainableFancyName)}
        clearSelectedObtainable={() => this.props.clearSelectedObtainable()}
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
        <div id="items-obtainables">
          <Table id="items-table"
            elements={[
              this.obtainable(Helper.ITEMS.PROGRESSIVE_LAMP),
              this.obtainable(Helper.ITEMS.PROGRESSIVE_BOW),
              this.obtainable(Helper.ITEMS.PROGRESSIVE_TROD),
              this.obtainable(Helper.ITEMS.PROGRESSIVE_HAMMER),
              this.obtainable(Helper.ITEMS.PROGRESSIVE_BOMBS),
              this.obtainable(Helper.ITEMS.PROGRESSIVE_BOOMERANG),
              this.obtainable(Helper.ITEMS.PROGRESSIVE_HOOKSHOT),
              this.obtainable(Helper.ITEMS.PROGRESSIVE_IROD),
              this.obtainable(Helper.ITEMS.PROGRESSIVE_SROD),
              this.obtainable(Helper.ITEMS.PROGRESSIVE_FROD),
              this.obtainable(Helper.ITEMS.PROGRESSIVE_NET),

              this.obtainable(Helper.ITEMS.HINT_GLASSES),
              this.obtainable(Helper.ITEMS.BOW_OF_LIGHT),
              this.obtainable(Helper.ITEMS.SCOOT_FRUIT),
              this.obtainable(Helper.ITEMS.FOUL_FRUIT),

              this.obtainable(Helper.ITEMS.NOTE_BOTTLE),
              this.obtainable(Helper.ITEMS.BOTTLE_ONE),
              this.obtainable(Helper.ITEMS.BOTTLE_TWO),
              this.obtainable(Helper.ITEMS.BOTTLE_THREE),
              this.obtainable(Helper.ITEMS.BOTTLE_FOUR),
            ]}
            numColumns={5}
          />
        </div>
      </div>
    );
  }
}

export default ItemsTracker;
