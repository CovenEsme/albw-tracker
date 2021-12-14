import _ from 'lodash';
import React from 'react';

import Images from '../services/images';

interface LabelInterface {
    labelText: string,
}

class Label extends React.Component<LabelInterface> {
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

export default Label;
