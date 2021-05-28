import React from 'react';
import Obtainable from './obtainable';
import '../../css/styles.css';

import noSword from '../../assets/gear/sword-0.png';
import forgottenSword from '../../assets/gear/sword-1.png';
import masterSwordLv1 from '../../assets/gear/sword-2.png';
import masterSwordLv2 from '../../assets/gear/sword-3.png';
import masterSwordLv3 from '../../assets/gear/sword-4.png';

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

    this.swordImages = [
      noSword,
      forgottenSword,
      masterSwordLv1,
      masterSwordLv2,
      masterSwordLv3,
    ]
  }

  render() {
    return (
      <div id="progressive-sword">
        <Obtainable obtainableName="Progressive Sword"
                    images={this.swordImages} />
      </div>
    );
  }
}

export default GearTracker;
