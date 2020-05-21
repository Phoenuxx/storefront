import React, { Component } from 'react';
import { connect } from "react-redux";
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';


class Cart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      subtotal: 0,
      totalItems: 0
    }
  };

  componentDidMount() {
    // var itemPrice = 0;
    var subtotalMath = 0;
    var totalItems = 0;
    this.props.cart.map((item, i) => {
      var itemPrice = item.price * item.quantity;
      totalItems += item.quantity
      subtotalMath += itemPrice
      console.log(itemPrice)
      console.log(subtotalMath)
      console.log(totalItems)
    });
    this.setState({
      subtotal: subtotalMath,
      totalItems: totalItems
    })
  };

  render() {
    return (
      <div>
        <Navbar />
        {this.props.cart.length > 0 ?
        <div className='row cart-container'>
          <div className='col-8 col-lg-10' id='cart-display'>
            <div className='row'>
              <div className='col-10'>
                <p className='cart-title'>Shopping Cart</p>
              </div>
              <div className='col-2 '>
                <p className='price-col'>Price</p>
              </div>
            </div>
            {
              // console.log(this.props.cart)

              this.props.cart.map((item, i) => {
                return (
                  <div className='row item-view'>
                    <div className='col-9 col-md-10'>
                      <div className='row'>
                        <img class="card-img-top col-2" src={item.image} alt={item.product} />
                        <div className='cart-product-name col-10'>{item.product}</div>
                      </div>
                      <div className="cart-product-quantity">
                        <label for="exampleFormControlSelect1">Quantity</label>
                        <select className="form-control" id="quantity-select">
                          <option>{parseInt(item.quantity)}</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                      <button class="btn btn-primary remove-btn">Remove</button>
                    </div>
                    <div className='col-3 col-md-2'>
                      <p>${parseInt(item.price)}</p>
                    </div>
                  </div>
                )
              })
            }
            <div className='subtotal'>Subtotal ({this.state.totalItems} Items):${this.state.subtotal}</div>
          </div>
          <div className='col-4 col-lg-2' id='checkout'>
            <div className='checkout-subtotal'>Subtotal ({this.state.totalItems} Items):${this.state.subtotal}</div>
            <button id='checkout-button' className='btn btn-outline-dark btn-warning' onClick={() => alert('order submitted')}>Procced w/ Checkout</button>
          </div>
        </div> : <div> Your cart is empty</ div>}
        <Footer />
      </div>
    )
  };
};

// {this.props.cart[0].product}
const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (props) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          product: props.product,
          image: props.image,
          price: props.price,
          quantity: props.quantity
        }
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);