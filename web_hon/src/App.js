import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     sentence: ''
  //   }
  // }
  state = {
    sentence: ''
  }

  getResponse = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  componentDidMount() {
    this.getResponse()
      .then(res => {
        const someData = res;
        this.setState({ sentence: someData.data });
      })
  }

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.sentence}
        </h1>
      </div>
    );
  }
}

export default App;
