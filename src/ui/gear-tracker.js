import React from 'react';
import gearOverlay from '../assets/gear-overlay.png';
import '../css/gear-tracker.css';

export default class GearTracker extends React.Component {
  render() {
    return <div id="gear-tracker">
        <img src={gearOverlay} id="gear-overlay" alt="The gear overlay."/>
    </div>;
  }
}
