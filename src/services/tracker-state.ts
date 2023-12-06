import _ from "lodash";

import Helper from "./helper";

class TrackerState {
  obtainables: Record<string, number>;

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
    const newState = this._clone();
    const incrementValue = 1;

    let newObtainableCount = this.getObtainableValue(obtainableName)
                             + incrementValue;
    const maxObtainableCount = Helper.maxObtainableCount(obtainableName);

    if (newObtainableCount > maxObtainableCount) {
      newObtainableCount = Helper.startingObtainableCount(obtainableName);
    }

    _.set(newState.obtainables, obtainableName, newObtainableCount);

    return newState;
  }

  decrementObtainable(obtainableName: string): TrackerState {
    const newState = this._clone();
    const decrementValue = 1;

    let newObtainableCount = this.getObtainableValue(obtainableName)
                             - decrementValue;
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

  getSelectedObtainable(): string {
    return _.get<TrackerState, string>(this, "selectedObtainable");
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
