import React, { Component } from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <nav className="navbar sticky-bottom" style={{padding: '20px'}}>
          <div className="mx-auto">
            &copy; 2018 developed by Tammy
          </div>
        </nav>
      </footer>
    )
  }
}

export default Footer;
