import React, { Component } from 'react';
import HocPattern from '../hoc/HocPattern';

class Counter extends Component {
  render() {
    const { count, handleLow, handleHigh } = this.props;

    return (
      <main className="container mx-auto my-5">
        <h1 className="text-4xl font-bold text-center">Counter</h1>
        <div className="flex justify-center my-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleHigh}
          >
            +
          </button>
          <span className="text-7xl mx-4 font-bold">
            {count <= 9 && count >= 0 ? '0' + count : count}{' '}
            <small className="text-2xl font-normal">counted.</small>
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLow}
          >
            -
          </button>
        </div>
      </main>
    );
  }
}

export default HocPattern(Counter, 10, 10);
