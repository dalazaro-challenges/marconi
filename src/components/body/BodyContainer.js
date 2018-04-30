import React, { Component } from 'react';

import CoreTech from './CoreTech.js';
import UseCases from './UseCases.js';
import Developers from './Developers.js';

class BodyContainer extends Component {
  render() {
    return (
      <div>
        <CoreTech />
        <UseCases />
        <Developers />
      </div>
    )
  }
}

export default BodyContainer;