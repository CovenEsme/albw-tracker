import _ from 'lodash';

class Constants {
  static createFromArray(dataArray) {
    const data = _.reduce(
      dataArray,
      (accumulator, option) => _.set(
        accumulator,
        _.toUpper(_.snakeCase(option)),
        option,
      ),
      {},
    );

    return data;
  }
}

export default Constants;
