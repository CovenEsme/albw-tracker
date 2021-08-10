import _ from 'lodash';
import React from 'react';

import Helper from '../services/helper';
import Images from '../services/images';
import Obtainable from './obtainable';
import Table from './table';

class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      obtainables: Helper.getEmptyObtainables(),
    };
  }

  handleClick(increment, obtainableName) {
    const updatedObtainables = this.state.obtainables;
    const maxCount = Helper.getMaxObtainableCount(obtainableName);

    let newCount = updatedObtainables[obtainableName];

    if (increment) {newCount++;}
    else           {newCount--;}

    if (newCount > maxCount) {newCount = 0;}
    else if (newCount < 0)   {newCount = maxCount;}

    updatedObtainables[obtainableName] = newCount;
    this.setState({obtainables: updatedObtainables});
    this.props.setSelectedObtainable(Helper.getFancyName(obtainableName,
                                                         newCount));
  }

  obtainable(obtainableName) {
    const obtainableFancyName = Helper.getFancyName(obtainableName,
                                        this.state.obtainables[obtainableName]);
    const obtainableImages = _.get(Images.IMAGES,
                                   ['OBTAINABLES', obtainableName]);
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
      <div className="tracker">
        <div className="gear">
          <img
            id="gear-overlay"
            src={_.get(Images.IMAGES, 'GEAR_OVERLAY')}
            alt="Gear overlay"
            draggable={false}
          />
          <div id="gear-obtainables">
            <div id="sword-block">
              {this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_SWORD)}
              {this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_MAIL)}
              {this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_SHIELD)}
            </div>
            <div id="painting-block">
              {this.obtainable(Helper.OBTAINABLES.SAGE_GULLEY)}
              {this.obtainable(Helper.OBTAINABLES.SAGE_OREN)}
              {this.obtainable(Helper.OBTAINABLES.SAGE_ROSSO)}
              {this.obtainable(Helper.OBTAINABLES.SAGE_IMPA)}
              {this.obtainable(Helper.OBTAINABLES.SAGE_IRENE)}
              {this.obtainable(Helper.OBTAINABLES.SAGE_OSFALA)}
              {this.obtainable(Helper.OBTAINABLES.SAGE_SERES)}
            </div>
            <div id="pendant-block">
              {this.obtainable(Helper.OBTAINABLES.PENDANT_OF_POWER)}
              {this.obtainable(Helper.OBTAINABLES.PENDANT_OF_WISDOM)}
              {this.obtainable(Helper.OBTAINABLES.PENDANT_OF_COURAGE)}
            </div>
            <div id="accessory-block">
              {this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_BRACELET)}
              {this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_MITT)}
              {this.obtainable(Helper.OBTAINABLES.PEGASUS_BOOTS)}
              {this.obtainable(Helper.OBTAINABLES.ZORA_FLIPPERS)}
              {this.obtainable(Helper.OBTAINABLES.BEE_BADGE)}
              {this.obtainable(Helper.OBTAINABLES.STAMINA_SCROLL)}
            </div>
            <div id="extension-block">
              {this.obtainable(Helper.OBTAINABLES.SMOOTH_GEM)}
              {this.obtainable(Helper.OBTAINABLES.POUCH)}
              {this.obtainable(Helper.OBTAINABLES.BELL)}
            </div>
            <div id="heart-container">
              {this.obtainable(Helper.OBTAINABLES.PIECE_OF_HEART)}
            </div>
            <div id="collectable-block">
              {this.obtainable(Helper.OBTAINABLES.RUPEE)}
              {this.obtainable(Helper.OBTAINABLES.MAIAMAI)}
              {this.obtainable(Helper.OBTAINABLES.MONSTER_TAIL)}
              {this.obtainable(Helper.OBTAINABLES.MONSTER_HORN)}
              {this.obtainable(Helper.OBTAINABLES.MONSTER_GUTS)}
              {this.obtainable(Helper.OBTAINABLES.MASTER_ORE)}
            </div>
          </div>
        </div>
        <div className="items">
          <img
            id="items-overlay"
            src={_.get(Images.IMAGES, 'ITEMS_OVERLAY')}
            alt="Items overlay"
            draggable={false}
          />
          <div id="items-obtainables">
            <Table id="items-table"
              elements={[
                this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_LAMP),
                this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_BOW),
                this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_TROD),
                this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_HAMMER),
                this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_BOMBS),
                this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_BOOMERANG),
                this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_HOOKSHOT),
                this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_IROD),
                this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_SROD),
                this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_FROD),
                this.obtainable(Helper.OBTAINABLES.PROGRESSIVE_NET),

                this.obtainable(Helper.OBTAINABLES.HINT_GLASSES),
                this.obtainable(Helper.OBTAINABLES.BOW_OF_LIGHT),
                this.obtainable(Helper.OBTAINABLES.SCOOT_FRUIT),
                this.obtainable(Helper.OBTAINABLES.FOUL_FRUIT),

                this.obtainable(Helper.OBTAINABLES.NOTE_BOTTLE),
                this.obtainable(Helper.OBTAINABLES.BOTTLE_ONE),
                this.obtainable(Helper.OBTAINABLES.BOTTLE_TWO),
                this.obtainable(Helper.OBTAINABLES.BOTTLE_THREE),
                this.obtainable(Helper.OBTAINABLES.BOTTLE_FOUR),
              ]}
              numColumns={5}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tracker;
