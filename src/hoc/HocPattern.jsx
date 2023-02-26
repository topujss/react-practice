/**Higher order components
 * for efficient code
 * for less code
 */

import { Component } from 'react';

const HocPattern = (OriginComponent, countHigh = 1, countLow = 1) => {
  class newComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    handleHigh = () => {
      this.setState((prevState) => ({
        ...prevState,
        count: prevState.count + countHigh,
      }));
    };
    handleLow = () => {
      this.setState((prevState) => ({
        ...prevState,
        count: prevState.count - countLow,
      }));
    };

    render() {
      return <OriginComponent count={this.state.count} handleHigh={this.handleHigh} handleLow={this.handleLow} />;
    }
  }
  return newComponent;
};

export default HocPattern;
