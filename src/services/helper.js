import _ from 'lodash';

import Constants from './constants';

import FANCY_NAMES from '../data/fancy-names.json';
import OBTAINABLES_JSON from '../data/obtainables.json';

class Helper {
  static OBTAINABLES = Constants.createFromArray(_.keys(OBTAINABLES_JSON));

  static getFancyName(obtainableName, obtainableCount) {
    const fancyName = _.get(FANCY_NAMES, [obtainableName, obtainableCount]);

    if (!fancyName) {return obtainableName;}
    else            {return fancyName;}
  }

  static getEmptyObtainables() {
    let emptyObtainables = {};

    for (var obtainable in OBTAINABLES_JSON) {
      emptyObtainables[obtainable] = 0;
    }

    return emptyObtainables;
  }

  static getMaxObtainableCount(obtainable) {
    return OBTAINABLES_JSON[obtainable];
  }
}

export default Helper;
