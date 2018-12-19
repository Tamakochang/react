import React, { Component } from 'react';
import {menus} from './Lib'

class OrderItem extends React.Component {

  _handleClick(event) {
    event.preventDefault();
    console.log(Order);
    Order.prototype._add_to_cart(this.props);
  }

  render() {
    return (
      <div className="col">
        <div className="text-center">
          <img className="card-img-top" src="../images/coffee.jpg" style={{width: '60px', height: '100px'}} alt={this.props.name}></img>
        </div>
        <h5 className="text-center">{this.props.name}</h5>
        <hr/>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn btn-dark" type="button" style={{width: '220px'}}>฿ {this.props.price}</button>
          </div>
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" onClick={this._handleClick.bind(this)}>+</button>
          </div>
        </div>
      </div>
    )
  }
}

class Order extends Component {
  constructor() {
    super()
    this.state = {
      cart: []
    }
  }

  _add_to_cart(item) {
    var update_cart = false;
    console.log(this.state)
    this.state.cart.map( cart_item => {
      if (cart_item.id == item.item.id) {
        cart_item.quantity++;
        update_cart = true;
      }
    })
    if (!update_cart) {
      const new_cart = {
        id: item.item.id,
        name: item.item.name,
        price: item.item.price,
        quantity: 1
      }
      this.setState({
        cart: this.state.cart.concat([new_cart])
      })
    }
  }

  render() {
    return (
      <section>
        <div className="container border" style={{margin: '20px', padding: '20px'}}>
          { menus.map( menu =>
              <div className="row">
              {menu.menus.map ( menus =>
                < OrderItem key={menus.id} name={menus.name} price={menus.price} item={menus} />
              )}
              </div>
          )}
        </div>
        <div>{this.state.cart}</div>
        <br/>
      </section>
    )
  }
}

export default Order;
