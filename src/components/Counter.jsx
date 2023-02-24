import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleHigh = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };
  handleLow = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count - 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <main className="container mx-auto my-5">
        <h1 className="text-4xl font-bold text-center">Counter</h1>
        <div className="flex justify-center my-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={this.handleHigh}
          >
            +
          </button>
          <span className="text-7xl mx-4 font-bold">{count <= 9 && count >= 0 ? '0' + count : count}</span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={this.handleLow}
          >
            -
          </button>
        </div>
      </main>
    );
  }
}

export default Counter;
