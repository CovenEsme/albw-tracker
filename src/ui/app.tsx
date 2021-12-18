import React from 'react';

import Helper from '../services/helper';
import Label from './label';
import ObtainablesTracker from './obtainables-tracker';
import TrackerState from '../services/tracker-state';

import Images from '../services/images';
import Loader from 'react-loader-spinner';

import '../css/styles.scss';

interface AppState {
  isLoading:    boolean,
  trackerState: TrackerState,
}

class App extends React.Component<{}, AppState> {
  constructor(props: number) {
    super(props);

    const trackerState = new TrackerState();

    this.state = {
      isLoading: true,
      trackerState,
    };

    this.initialize();

    this.incrementObtainable = this.incrementObtainable.bind(this);
    this.decrementObtainable = this.decrementObtainable.bind(this);

    this.setSelectedObtainable   = this.setSelectedObtainable.bind(this);
    this.clearSelectedObtainable = this.clearSelectedObtainable.bind(this);
  }

  async initialize() {
    await Images.importImages();

    Helper.initialize();

    this.setState({
      isLoading: false,
    });
  }

  incrementObtainable(obtainableName: string) {
    const {trackerState} = this.state;

    let newTrackerState = trackerState;

    newTrackerState = newTrackerState.incrementObtainable(obtainableName);
    newTrackerState = newTrackerState.setSelectedObtainable(obtainableName);

    this.updateTrackerState(newTrackerState);
  }

  decrementObtainable(obtainableName: string) {
    const {trackerState} = this.state;

    let newTrackerState = trackerState;

    newTrackerState = newTrackerState.decrementObtainable(obtainableName);
    newTrackerState = newTrackerState.setSelectedObtainable(obtainableName);

    this.updateTrackerState(newTrackerState);
  }

  setSelectedObtainable(obtainableName: string) {
    const {trackerState} = this.state;
    const newTrackerState = trackerState.setSelectedObtainable(obtainableName);

    this.updateTrackerState(newTrackerState);
  }

  clearSelectedObtainable() {
    const {trackerState} = this.state;
    const newTrackerState = trackerState.clearSelectedObtainable();

    this.updateTrackerState(newTrackerState);
  }

  updateTrackerState(newTrackerState: TrackerState) {
    const trackerState = newTrackerState;

    this.setState({
      trackerState,
    });
  }

  render() {
    const {
      isLoading,
      trackerState,
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
        <div className="albw-rando-tracker">
          <ObtainablesTracker
            incrementObtainable={(obtainableName) => this.incrementObtainable(obtainableName)}
            decrementObtainable={(obtainableName) => this.decrementObtainable(obtainableName)}
            setSelectedObtainable={(obtainableName) => this.setSelectedObtainable(obtainableName)}
            clearSelectedObtainable={() => this.clearSelectedObtainable()}
            trackerState={trackerState}
          />
          <Label labelText={trackerState.getSelectedObtainable()}/>
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

export default App;
