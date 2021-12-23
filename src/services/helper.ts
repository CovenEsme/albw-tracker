import _ from "lodash";

import Constants from "./constants";

import FANCY_NAMES from "../data/fancy-names.json";
import OBTAINABLES from "../data/obtainables.json";

class Helper {
  static startingObtainables: Record<string, number>;

  static initialize(): void {
    this.startingObtainables = this._setStartingObtainables();
  }

  static OBTAINABLES: Record<string, string>
    = Constants.createFromArray(_.keys(OBTAINABLES));

  static fancyName(obtainableName: string, obtainableCount: number): string {
    const fancyName = _.get(FANCY_NAMES, [obtainableName, obtainableCount]);

    if (fancyName) {
      return fancyName;
    }

    return obtainableName;
  }

  static emptyObtainables(): Record<string, number> {
    const emptyObtainables: Record<string, number> = {};
    let obtainable: string;

    for (obtainable in OBTAINABLES) {
      emptyObtainables[obtainable] = 0;
    }

    return emptyObtainables;
  }

  static startingObtainableCount(obtainable: string): number {
    const defaultStartingValue = 0;

    return _.get(this.startingObtainables, obtainable, defaultStartingValue);
  }

  static maxObtainableCount(obtainable: string): number {
    return _.get(OBTAINABLES, obtainable);
  }

  static _setStartingObtainables(): Record<string, number> {
    return {
      // [this.OBTAINABLES.PROGRESSIVE_MAIL]: 1,
      // [this.OBTAINABLES.PROGRESSIVE_SWORD]: 1,
    };
  }
}

export default Helper;
