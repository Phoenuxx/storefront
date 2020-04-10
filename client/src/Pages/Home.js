import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/navbar';
import Product from '../Components/product';
import API from "../Utils/API";

var array = [];

class Home extends Component {

  state = {
    length: 0,
    data: []
  }
  UNSAFE_componentWillMount() {
    this.loadInv();

    //  console.log(this.state)
  }

  componentDidUpdate() {

  }

  loadInv = () => {
    API.getInv()
      .then(res => {

        this.setState(
          {
            data: res.data,
            page: Math.ceil(res.data.length / 12)
          })
        console.log(this.state.page);

      })
      .catch(err => console.log(err));
  }

  loadNextPage = () => {
    API.getAndCount(1)
      .then(res => {

        this.setState(
          {
            data: res.data
          })
        console.log(res.data);

      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className='row product-cont'>
          {this.state.data.map((info, i) => {
            return <Product key={i} product={info.product_name} pic={info.picture} description={info.description} item={info.item_number} />
          })
          }
        </div>
        {this.state.data.map((info, i) => { return <button onClick={this.getAndCount} > {i + 1}</button> })}
      
      </div >
    );
  }
}
export default Home;
