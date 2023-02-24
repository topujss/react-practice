import React, { Component } from 'react';

const IncreDecre = (originalComponent) => {
  class newCompont extends Component {
    render() {
      return originalComponent;
    }
  }

  return newCompont;
};

export default IncreDecre;
