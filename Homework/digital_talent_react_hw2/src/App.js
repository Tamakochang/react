import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header'
import Menu from './Menu'
import Order from './Order'
import Footer from './Footer'

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <section style={{'marginTop': '30px'}}>
          <h3>Our Products</h3>
          <hr/><br/>
          <Order />
        </section>
        <Footer />
      </div>
    )
  }
}

export default App;
