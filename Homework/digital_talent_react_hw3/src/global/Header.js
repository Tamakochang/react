import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <div className="mx-auto">
            <a className="navbar-brand mb-0 h1" href="#" style={{fontFamily: "Lobster", fontSize: "20pt"}}>Coffee Shop</a>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
