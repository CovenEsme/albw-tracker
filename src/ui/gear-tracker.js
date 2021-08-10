import _ from 'lodash';
import React from 'react';

import Helper from '../services/helper';
import Images from '../services/images';
import Obtainable from './obtainable';

import '../css/styles.scss';

class GearTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      obtainables: Helper.getEmptyGear(),
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
      <div id="gear-label-text">{selectedObtainable}</div>
    )
  }

  handleClick(increment, obtainableName) {
    const updatedObtainables = this.state.obtainables;
    const maxCount = Helper.getMaxGearCount(obtainableName);

    let newCount = updatedObtainables[obtainableName];

    if (increment) {newCount++;}
    else           {newCount--;}

    if (newCount > maxCount) {newCount = 0;}
    else if (newCount < 0)   {newCount = maxCount;}

    updatedObtainables[obtainableName] = newCount;
    this.setState({obtainables: updatedObtainables});
    this.setSelectedObtainable(Helper.getFancyName(obtainableName, newCount));
  }

  collectable(collectableName) {
    const collectableImage = _.get(Images.IMAGES, collectableName);

    return (
      <img
        className={_.toLower(_.snakeCase(collectableName))}
        id={collectableName}
        src={collectableImage}
        alt={collectableName}
        draggable={false}
      />
    )
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
        setSelectedObtainable={this.setSelectedObtainable}
        clearSelectedObtainable={this.clearSelectedObtainable}
      />
    );
  }

  render() {
    return (
      <div className="gear-tracker">
        <img
          id="gear-overlay"
          src={_.get(Images.IMAGES, 'GEAR_OVERLAY')}
          alt="Gear overlay"
          draggable={false}
        />
        <div className="gear-label">
          <img
            id="gear-label-image"
            src={_.get(Images.IMAGES, 'GEAR_LABEL')}
            alt="Gear label"
            draggable={false}
          />
          {this.selectedObtainable()}
        </div>
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
          <div id="extension-block">
            {this.obtainable(Helper.GEAR.SMOOTH_GEM)}
            {this.obtainable(Helper.GEAR.POUCH)}
            {this.obtainable(Helper.GEAR.BELL)}
          </div>
          <div id="heart-container">
            {this.obtainable(Helper.GEAR.PIECE_OF_HEART)}
          </div>
          <div id="collectable-block">
            {this.collectable('RUPEE')}
            {this.collectable('MAIAMAI')}
            {this.collectable('MONSTER_TAIL')}
            {this.collectable('MONSTER_HORN')}
            {this.collectable('MONSTER_GUTS')}
            {this.collectable('MASTER_ORE')}
          </div>
        </div>
      </div>
    );
  }
}

export default GearTracker;
