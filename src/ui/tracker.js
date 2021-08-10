import React from 'react';

import GearTracker from './gear-tracker';
import ItemsTracker from './items-tracker';
import Images from '../services/images';
import Loader from 'react-loader-spinner';

import '../css/styles.scss';

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
        <div className="tracker">
            <GearTracker />
            <ItemsTracker />
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
