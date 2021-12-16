import _ from 'lodash';

import Helper from './helper';

class TrackerState {
  private obtainables: Record<string, number>;

  constructor() {
    this.obtainables = _.reduce(
      Helper.OBTAINABLES,
      (accumulator, obtainable) => _.set(
        accumulator,
        obtainable,
        Helper.startingObtainableCount(obtainable),
      ),
      {},
    );
  }

  readState(): Record<string, Record<string, number>> {
    return {obtainables: this.obtainables};
  }

  getObtainableValue(obtainableName: string): number {
    return _.get(this.obtainables, obtainableName);
  }

  incrementObtainable(obtainableName: string): TrackerState {
    let newState = this._clone();

    let newObtainableCount = 1 + this.getObtainableValue(obtainableName);
    const maxObtainableCount = Helper.maxObtainableCount(obtainableName);

    if (newObtainableCount > maxObtainableCount) {
      newObtainableCount = Helper.startingObtainableCount(obtainableName);
    }

    _.set(newState.obtainables, obtainableName, newObtainableCount);

    return newState;
  }

  decrementObtainable(obtainableName: string): TrackerState {
    let newState = this._clone();

    let newObtainableCount = this.getObtainableValue(obtainableName) - 1;
    const minObtainableCount = Helper.startingObtainableCount(obtainableName);

    if (newObtainableCount < minObtainableCount) {
      newObtainableCount = Helper.maxObtainableCount(obtainableName);
    }

    _.set(newState.obtainables, obtainableName, newObtainableCount);

    return newState;
  }

  setSelectedObtainable(obtainableName: string): TrackerState {
    const newState = this._clone();

    const obtainableValue = this.getObtainableValue(obtainableName);
    const obtainableFancyName = Helper.fancyName(obtainableName,
                                                 obtainableValue);

    _.set(newState, "selectedObtainable", obtainableFancyName);

    return newState;
  }

  clearSelectedObtainable(): TrackerState {
    const newState = this._clone();

    _.set(newState, "selectedObtainable", "");

    return newState;
  }

  _clone(): TrackerState {
    const newState = new TrackerState();

    newState.obtainables = _.clone(this.obtainables);

    return newState;
  }
}

export default TrackerState;
