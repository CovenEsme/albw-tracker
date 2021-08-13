import _ from 'lodash';

import Helper from './helper';

class TrackerState {
  static default() {
    const newState = new TrackerState();

    newState.obtainables = _.reduce(
      Helper.OBTAINABLES,
      (accumulator, obtainable) => _.set(
        accumulator,
        obtainable,
        Helper.startingObtainableCount(obtainable),
      ),
      {},
    );

    newState.selectedObtainable = null;

    return newState;
  }

  readState() {
    return {obtainables: this.obtainables};
  }

  getObtainableValue(obtainableName) {
    return _.get(this.obtainables, obtainableName);
  }

  incrementObtainable(obtainableName) {
    let newState = this._clone();

    let newObtainableCount = 1 + this.getObtainableValue(obtainableName);
    const maxObtainableCount = Helper.maxObtainableCount(obtainableName);

    if (newObtainableCount > maxObtainableCount) {
      newObtainableCount = Helper.startingObtainableCount(obtainableName);
    }

    _.set(newState.obtainables, obtainableName, newObtainableCount);

    return newState;
  }

  decrementObtainable(obtainableName) {
    let newState = this._clone();

    let newObtainableCount = this.getObtainableValue(obtainableName) - 1;
    const minObtainableCount = Helper.startingObtainableCount(obtainableName);

    if (newObtainableCount < minObtainableCount) {
      newObtainableCount = Helper.maxObtainableCount(obtainableName);
    }

    _.set(newState.obtainables, obtainableName, newObtainableCount);

    return newState;
  }

  setSelectedObtainable(obtainableName) {
    const newState = this._clone();

    const obtainableValue = this.getObtainableValue(obtainableName);
    const obtainableFancyName = Helper.fancyName(obtainableName,
                                                 obtainableValue);

    _.set(newState, "selectedObtainable", obtainableFancyName);

    return newState;
  }

  clearSelectedObtainable() {
    const newState = this._clone();

    _.set(newState, "selectedObtainable", null);

    return newState;
  }

  _clone() {
    const newState = new TrackerState();

    newState.obtainables = _.clone(this.obtainables);

    return newState;
  }
}

export default TrackerState;
