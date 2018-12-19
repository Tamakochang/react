import React, { Component } from 'react';
import {menus} from './Lib'

class MenuItem extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <hr/>
          <p>{this.props.description}</p>
          <a href="#" className="btn btn-dark">View More</a>
        </div>
      </div>
    )
  }
}

class Menu extends Component {
  render() {
    return (
      <div className="card-deck">
        { menus.map( menu =>
          < MenuItem key={menu.id} name={menu.name} description={menu.description} />
        )}
      </div>
    )
  }
}

export default Menu;
