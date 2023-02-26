import React, { Component } from 'react';
import HocPattern from '../hoc/HocPattern';

class View extends Component {
  render() {
    const { count, handleHigh } = this.props;

    return (
      <main className="container mx-auto mt-20">
        <h1 className="text-4xl font-normal text-center">View</h1>
        <div className="section w-48 h-48 bg-sky-300 mx-auto relative" onMouseLeave={handleHigh}>
          <div className="absolute font-light left-20 top-20 bg-sky-300">
            {count <= 9 && count >= 0 ? '0' + count : count} views
          </div>
        </div>
      </main>
    );
  }
}

export default HocPattern(View, 2);
