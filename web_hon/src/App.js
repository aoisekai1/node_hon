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
    nama: '',
    jekel: '',
    alamat: ''
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
        this.setState(
          { 
            nama: res.data.nama,
            jekel: res.data.jekel,
            alamat: res.data.alamat
          }
        );
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Biodata</h1>
        <p>Nama : {this.state.nama}</p>
        <p>Jenis Kelamin : {this.state.jekel}</p>
        <p>Alamat : {this.state.alamat}</p>
      </div>
    );
  }
}

export default App;
