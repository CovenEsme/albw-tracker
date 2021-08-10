import React from 'react';

import Tracker from './tracker';
import Label from './label';

import Images from '../services/images';
import Loader from 'react-loader-spinner';

import '../css/styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      selectedObtainable: null,
    };

    this.setSelectedObtainable   = this.setSelectedObtainable.bind(this);
    this.clearSelectedObtainable = this.clearSelectedObtainable.bind(this);

    this.initialize();
  }

  async initialize() {
    await Images.importImages();

    this.setState({
      isLoading: false,
    });
  }

  setSelectedObtainable(obtainableName) {
    this.setState({selectedObtainable: obtainableName});
  }

  clearSelectedObtainable() {
    this.setState({selectedObtainable: null});
  }

  tracker() {
    return (
      <Tracker
        setSelectedObtainable={(obtainableName) => this.setSelectedObtainable(
                                                          obtainableName)}
        clearSelectedObtainable={() => this.clearSelectedObtainable()}
      />
    );
  }

  render() {
    const {
      isLoading,
      selectedObtainable,
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
            {this.tracker()}
            <Label labelText={selectedObtainable}/>
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
