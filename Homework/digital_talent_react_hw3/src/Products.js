import React, { Component } from 'react';
import {menus} from './Lib'

class CartItem extends React.Component {
  render() {
    return (
      <tr>
        <td><img className="img-thumbnail" src="../images/coffee.jpg" style={{width: '40px', height: '60px'}} /></td>
        <td>
          <h6>{this.props.name}</h6>
          <p>{this.props.quantity} x {this.props.price} ฿</p>
        </td>
      </tr>
    )
  }
}

class OrderItem extends React.Component {

  _handleClick(event) {
    event.preventDefault();
    this.props._add_to_basket(this.props, this.state)
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

class Product extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      total: 0
    }
  }
  _handleClick(event) {
    event.preventDefault();
    alert("Thank you for your ordering")
    this.setState({
      cart: [],
      total: 0
    })
    //this.props._add_to_basket(this.props, this.state)
  }
  _add_to_basket(item) {
    var update_cart = false;
    this.state.cart.map( cart_item => {
      if (cart_item.id == item.id) {
        this.setState({
          quantity: cart_item.quantity++,
          total: this.state.total+cart_item.price
        })
        update_cart = true;
      }
    })
    if (!update_cart) {
      const new_cart = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1
      }
      this.setState({
        cart: this.state.cart.concat([new_cart]),
        total: this.state.total + item.price
      })
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="border" style={{marginLeft: '5px', padding: '20px'}}>
            { menus.map( menu =>
                <div className="row">
                {menu.menus.map ( menus =>
                  < OrderItem key={menus.id} id={menus.id} name={menus.name} price={menus.price} _add_to_basket={this._add_to_basket.bind(this)} />
                )}
                </div>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div className="container border" style={{marginRight: '10px', padding: '20px'}}>
            <table class="table">
              <tbody>
                { this.state.cart.map( cart =>
                  < CartItem key={cart.id} name={cart.name} price={cart.price} quantity={cart.quantity} />
                )}
              </tbody>
            </table>
            <hr/>
            {
              this.state.cart.length > 0?
                <div className="text-right">
                  <p>Subtotal: {this.state.total} ฿</p>
                  <p>Vat: 7%</p>
                  <p>Total: {Math.round(this.state.total+(this.state.total*0.07))} ฿</p>
                  <button className="btn btn-outline-secondary" type="button" onClick={this._handleClick.bind(this)}>Checkout</button>
                </div>
              :
                <div className="text-center">Empty Cart</div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
