import React from 'react';
import GearTracker from './obtainable-tracker/gear-tracker';
import gearOverlay from '../assets/gear-overlay.png';
import '../css/styles.css';

class Tracker extends React.Component {
  render() {
    return (
      <div id="gear-tracker">
        <img src={gearOverlay} id="gear-overlay" alt="Gear overlay"/>
        <GearTracker />
      </div>
    );
  }
}

export default Tracker;
