import _ from 'lodash';

import Constants from './constants';

import FANCY_NAMES from '../data/fancy-names.json';
import OBTAINABLES from '../data/obtainables.json';

class Helper {
  static initialize() {
    this._setStartingObtainables();
  }

  static OBTAINABLES = Constants.createFromArray(_.keys(OBTAINABLES));

  static fancyName(obtainableName, obtainableCount) {
    const fancyName = _.get(FANCY_NAMES, [obtainableName, obtainableCount]);

    if (!fancyName) {return obtainableName;}
    else            {return fancyName;}
  }

  static emptyObtainables() {
    let emptyObtainables = {};

    for (var obtainable in OBTAINABLES) {
      emptyObtainables[obtainable] = 0;
    }

    return emptyObtainables;
  }

  static startingObtainableCount(obtainable) {
    return _.get(this.startingObtainables, obtainable, 0);
  }

  static maxObtainableCount(obtainable) {
    return _.get(OBTAINABLES, obtainable);
  }

  static _setStartingObtainables() {
    this.startingObtainables = {
      [this.OBTAINABLES.PROGRESSIVE_MAIL]: 1,
    };
  }
}

export default Helper;
