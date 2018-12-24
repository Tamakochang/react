import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './global/Header'
import Products from './Products'
import Footer from './global/Footer'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default App;
