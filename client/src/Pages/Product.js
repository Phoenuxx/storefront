import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/navbar';
import SearchBox from '../Components/search-bar';
import Footer from '../Components/footer';
import API from "../Utils/API";

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: null
    }
  };

  componentDidMount() {
    this.setState(({
      product: this.props.match.params
    }), function () {
      console.log(this.state)
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
};

export default Product;