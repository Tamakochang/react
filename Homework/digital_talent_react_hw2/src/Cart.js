import React, { Component } from 'react';
import {cart} from './Lib'
import Order from './Order'

class CartItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name} x {this.props.quantity}</p>
      </div>
    )
  }
}

class Cart extends Component {
  render() {
    console.log(Order);
    return (
      <section>

      </section>
    )
  }
}

export default Cart;
