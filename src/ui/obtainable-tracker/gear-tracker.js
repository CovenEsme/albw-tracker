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

    this.state = {
      swordValue:    0, // Progressive: 0-4
      // mailValue:     0,
      // shieldValue:   0,
      //
      // braceletValue: 0,
      // mittValue:     0,
      // bootsValue:    0,
      // gemValue:      0,
      // flippersValue: 0,
      // badgeValue:    0,
      // scrollValue:   0,
      //
      // powerValue:    0,
      // wisdomValue:   0,
      // courageValue:  0,
      //
      // gulleyValue:   0,
      // orenValue:     0,
      // rossoValue:    0,
      // impaValue:     0,
      // ireneValue:    0,
      // osfalaValue:   0,
      // seresValue:    0,
      //
      // heartValue:    0,
      // rupeeValue:    0,
      // maiamaiValue:  0,
      // tailValue:     0,
      // hornValue:     0,
      // gutsValue:     0,
      // oreValue:      0,
    };

    this.swordImages = [
      noSword,
      forgottenSword,
      masterSwordLv1,
      masterSwordLv2,
      masterSwordLv3,
    ];
  }

  handleClick(increment) {
    var newSwordValue = this.state.swordValue;

    if (increment) {
      newSwordValue++;
    }
    else {
      newSwordValue--;
    }

    if (newSwordValue >= this.swordImages.length) {
      newSwordValue = 0;
    }
    else if (newSwordValue < 0) {
      newSwordValue = this.swordImages.length - 1;
    }

    this.setState({swordValue: newSwordValue});
  }

  render() {
    return (
      <Obtainable obtainableName="Progressive Sword"
                  image={this.swordImages[this.state.swordValue]}
                  incrementObtainable={() => this.handleClick(true)}
                  decrementObtainable={() => this.handleClick(false)}
      />
    );
  }
}

export default GearTracker;
