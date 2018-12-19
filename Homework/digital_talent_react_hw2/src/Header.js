import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Coffee Shop</h1>
          <p className="lead">For nothing just try to use react developing front end.</p>
        </div>
      </div>
    )
  }
}

export default Header;
