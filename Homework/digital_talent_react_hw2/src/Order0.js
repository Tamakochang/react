import React, { Component } from 'react';
import {menus} from './Lib'
import {cart} from './Lib'

class MemoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show_created_at: false
    }
  }
  _handleClick() {
    this.setState ({
      show_created_at: !this.state.show_created_at
    })
  }
  render() {
    return (
      <div onClick={this._handleClick.bind(this)}>
        {this.props.text} created at {this.state.show_created_at? this.props.created_at : null}
      </div>
    )
  }
}
class MemoContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      memo_list: [
        { id: 1, text: "this is the first.", created_at: new Date() },
        { id: 2, text: "this is the second.", created_at: new Date() },
        { id: 3, text: "this is the third.", created_at: new Date() }
      ]
    }
  }
  _getMemos() {
    return this.state.memo_list
  }
  _addMemo(memo_text) {
    const new_memo = {
      id: Math.random.toString(36).substring(2),
      text: memo_text,
      created_at: new Date()
    }
    this.setState({
      memo_list: this.state.memo_list.concat([new_memo])
    })
  }
  render() {
    return (
      <div>
        <div><MemoAddForm _addMemo = {this._addMemo.bind(this)} /></div>
        <hr/>
        { this._getMemos().map( memo =>
          <MemoItem
            key={memo.id}
            text={memo.text}
            created_at={memo.created_at.toString()} />
        )}
      </div>
    )
  }
}
class MemoAddForm extends React.Component {
  constructor() {
    super()
    this.memo = React.createRef();
  }
  _handleClick(event) {
    event.preventDefault()
    this.props._addMemo(this.memo.current.value)
  }
  render() {
    return (
      <div>
        <form onSubmit={this._handleClick.bind(this)}>
          <textarea ref = {this.memo}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

class OrderItem extends React.Component {
  _add_to_basket(item) {
    var update_cart = false;
    cart.map( cart_item => {
      if (cart_item.id == item.item.id) {
        cart_item.quantity++;
        update_cart = true;
      }
    })
    if (!update_cart) {
      cart.push({
        id: item.item.id,
        name: item.item.name,
        price: item.item.price,
        quantity: 1
      })
    }
  }
  
  _handleClick(event) {
    event.preventDefault()
    this.props._addMemo(this.memo.current.value)
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
            <button className="btn btn-outline-secondary" type="button" onClick={this._add_to_basket.bind(this, this.props)}>+</button>
          </div>
        </div>
      </div>
    )
  }
}

class Order extends Component {
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
      </section>
    )
  }
}

export default Order;
