import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  doClick = () => {
    this.setState((s) => ({ counter: s.counter + 1 }));
  };

  componentDidMount() {
    // pasileidzia viena karta, kai pirma karta uzkraunamas komponenetas
    console.log('Loaded');
  }

  componentWillUnmount() {
    console.log('numiro');
  }

  componentDidUpdate() {
    console.log('apsiapdeitino');
  }

  render() {
    return (
      <>
        <div>
          {this.state.counter}: {this.props.when}
        </div>
        <button onClick={this.doClick}>
          <svg>
            <use href="#star" />
          </svg>
        </button>
      </>
    );
  }
}

export default Counter;
