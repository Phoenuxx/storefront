import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from "../Components/Utils/API";

export default class featuredProduct extends Component {

  //set initial state
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  };
  componentDidMount = () => {
    API.getFeaturedProducts(this.props.url)
      .then(res => {
        this.setState(
          {
            data: res.data
          });

      }).then(res => {
        // console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide featured-products desktop-only" data-ride="carousel">
        <div id='featured-title'><h1>Similar Products</h1></div>
        <ol className="carousel-indicators">
          <li data-target="#caroExampleIndicauseltors" data-slide-to="0" className="active"></li>
          {this.state.data.map((info, i) => {
            return <li data-target="#carouselExampleIndicators" data-slide-to={i + 1}  ></li>
          })
          }
        </ol>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img className="d-block featured-img" src='https://www.roofmaster.com/wp-content/uploads/2020/01/2020-Ribbon-Small.jpg' alt='starting active slide' />
          </div>
          {this.state.data.map((info, i) => {
            // console.log(i);
            return (
              <div className="carousel-item">
                <Link to={'/category=' + info.category + '/subcat=' + info.subCategory + '/product=' + info.product_name}>
                  <img className="d-block featured-img" src={info.picture} alt={info.product_name} />
                </Link>
                <div className="carousel-caption d-none d-md-block">
                </div>
                <h5>{info.product_name}</h5>
                <p>{info.item_number}</p>
              </div>
            )
          })}
          <a className="carousel-control-prev controls-bg" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next controls-bg" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  };
}