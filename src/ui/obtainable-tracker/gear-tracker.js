import _ from 'lodash';
import React from 'react';
import gearOverlay from '../../assets/gear-overlay.png';
import '../css/styles.css';

class GearTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { gear: {
      sword:    0, // Progressive: 0-4
      mail:     0,
      shield:   0,

      bracelet: 0,
      mitt:     0,
      boots:    0,
      gem:      0,
      flippers: 0,
      badge:    0,
      scroll:   0,

      power:    0,
      wisdom:   0,
      courage:  0,

      gulley:   0,
      oren:     0,
      rosso:    0,
      impa:     0,
      irene:    0,
      osfala:   0,
      seres:    0,

      heart:    0,
      rupee:    0,
      maiamai:  0,
      tail:     0,
      horn:     0,
      guts:     0,
      ore:      0,
      }
    };
  }

  render() {
    return <div id="gear-tracker">
        <img src={gearOverlay} id="gear-overlay" alt="The gear overlay."/>
    </div>;
  }
}

export default GearTracker;
