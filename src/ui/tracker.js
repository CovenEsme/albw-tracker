import _ from 'lodash';
import React from 'react';

import GearTracker from './obtainable-tracker/gear-tracker';
import Images from '../services/images';
import Loader from 'react-loader-spinner';

import '../css/styles.css';

class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };

    this.initialize();
  }

  async initialize() {
    await Images.importImages();

    this.setState({
      isLoading: false,
    });
  }

  render() {
    const {
      isLoading,
    } = this.state;

    let content;

    if (isLoading) {
      content = (
        <div className="loading-spinner">
          <Loader color="white" type="Oval" />
        </div>
      );
    }
    else {
      content = (
        <div id="gear-tracker">
          <img
            id="gear-overlay"
            src={_.get(Images.IMAGES, 'GEAR_OVERLAY')}
            alt="Gear overlay"
            draggable={false}
          />
          <GearTracker />
        </div>
      );
    }

    return (
      <>
        {content}
      </>
    );
  }
}

export default Tracker;
