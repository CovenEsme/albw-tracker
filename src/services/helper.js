import _ from 'lodash';

import Constants from './constants';

import FANCY_NAMES from '../data/fancy-names.json';
import GEAR_JSON   from '../data/gear.json';
import ITEMS_JSON  from '../data/items.json';

class Helper {
  static GEAR = Constants.createFromArray(_.keys(GEAR_JSON));
  static ITEMS = Constants.createFromArray(_.keys(ITEMS_JSON));

  static ALL_OBTAINABLES = _.concat(
                             _.keys(GEAR_JSON),
                             _.keys(ITEMS_JSON),
                           );

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

  static getEmptyItems() {
    let emptyItems = {};

    for (var obtainable in ITEMS_JSON)  {
      emptyItems[obtainable] = 0;
    }

    return emptyItems;
  }

  static getMaxGearCount(obtainable) {
    return GEAR_JSON[obtainable];
  }

  static getMaxItemsCount(obtainable) {
    return ITEMS_JSON[obtainable];
  }
}

export default Helper;
