import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <h1>Get a Random Advice</h1>
        <div className="card">
          <h2 className="heading">"{this.state.advice}"</h2>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Random advice!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;