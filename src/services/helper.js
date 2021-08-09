import _ from 'lodash';

import Constants from './constants';

import FANCY_NAMES from '../data/fancy-names.json';
import GEAR_JSON from '../data/gear.json';

class Helper {
  static GEAR = Constants.createFromArray(_.keys(GEAR_JSON));

  static ALL_OBTAINABLES = _.keys(GEAR_JSON);

  static getFancyName(obtainableName, obtainableCount) {
    const fancyName = _.get(FANCY_NAMES, [obtainableName, obtainableCount]);

    if (!fancyName) {return obtainableName;}
    else            {return fancyName;}
  }

  static getEmptyGear() {
    let emptyGear = {};

    for (var obtainable in GEAR_JSON)  {
      emptyGear[obtainable] = 0;
    }

    return emptyGear;
  }

  static getMaxCount(obtainable) {
    return GEAR_JSON[obtainable];
  }
}

export default Helper;
