import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Navbar from '../Components/navbar';
import DisplayProduct from '../Components/displayProduct';
import SearchBox from '../Components/search-bar';
import Footer from '../Components/footer';
import API from "../Utils/API";
import { addToCart } from '../Utils/Redux/actions';

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  };

  componentDidMount() {
    this.loadInv();
  }


  //API call to pull product data
  loadInv = () => {
    // console.log(this.props.match.params);
    API.getSpecificProduct(this.props.match.params.category, this.props.match.params.subcategory, this.props.match.params.product)
      .then(res => {
        this.setState(
          {
            data: res.data,
          });
        // console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <Navbar />
        {this.state.data[0] ?
          <DisplayProduct
            product={this.state.data[0].product_name}
            img={this.state.data[0].picture}
            description={this.state.data[0].description}
            item={this.state.data[0].item_number}
            weight={this.state.data[0].weight}
            units={this.state.data[0].units}
            price={this.state.data[0].price}
            category={this.state.data[0].category}
            subcategory={this.state.data[0].subCategory}
            url={this.props.match.params.category}
            onCartButtonClick={(selectedQuantity) => this.props.addToCart({ product: this.state.data[0].product_name, image: this.state.data[0].picture, price: this.state.data[0].price, quantity: parseInt(selectedQuantity) })}
          />
          : <div>There is no product to display here. This product either does not exist or you may need to refresh to try agian.</div>}
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (props) => {
      dispatch(addToCart(props));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);