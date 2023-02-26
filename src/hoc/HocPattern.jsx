/**Higher order components
 * for efficient code
 * for less code
 */

import { Component } from 'react';

const HocPattern = (originComponent) => {
  class newComponent extends Component {
    render() {
      return originComponent
    }
  }
  return newComponent;
};

export default HocPattern;
