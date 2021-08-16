import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Images from '../services/images';

class Label extends React.Component {

  render() {
    const {labelText} = this.props;

    return (
      <div className="label">
        <img
          id="label-image"
          src={_.get(Images.IMAGES, 'LABEL')}
          alt="Label"
          draggable={false}
        />
        <div id="label-text" data-testid="label-text">{labelText}</div>
      </div>
    );
  }
}

Label.propTypes = {
  labelText: PropTypes.string.isRequired,
};

export default Label;
