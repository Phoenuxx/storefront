import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../Components/navbar';
import Product from '../Components/product';
import ReactPaginate from 'react-paginate';
import API from "../Utils/API";


class Home extends Component {


  constructor(props) {
    super(props);
    this.setCurrentpage = this.setCurrentpage.bind(this);
  };

  static propTypes = {
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    perPage: PropTypes.number.isRequired,
  };

  state = {
    length: 0,
    data: [],
    pageData: [],
    currentPage: 1,
    currentPageStart: 0,
    currentPageEnd: 12,
    perPage: 12,
    currentVisibleInv: []
  }

  UNSAFE_componentWillMount() {
    this.loadInv();
    //  console.log(this.state)
  }

  loadInv = () => {
    API.getInv()
      .then(res => {
        this.setState(
          {
            data: res.data,
            currentVisibleInv: res.data.slice(this.state.currentPageStart, this.state.currentPageEnd),
            pageCount: Math.ceil(res.data.length / 12)
          });
        // console.log(this.state.currentVisibleInv);
      })
      .catch(err => console.log(err));
  };

  displayUpdateOnPageChange = () => {

    let currentPage = this.state.currentPage

    if (currentPage === 1) {
      this.setState({
        // currentPageStart: 0,
        // currentPageEnd: currentPage * this.state.perPage,
        // currentVisibleInv: this.state.data.slice(this.state.currentPageStart, this.state.currentPageEnd),
      }, function () {
        // console.log('displayUpdateOnPageChange')
        console.log('=1')
        console.log("currentPage: " + this.state.currentPage + "-" + " currentPageStart: " + this.state.currentPageStart + "-" + "CurrentPageEnd: " + this.state.currentPageEnd);
        // console.log(this.state);
        // console.log(this.state.currentPage);
      });
    }
    else if (currentPage >= 2) {
      this.setState({
        currentPageStart: (this.state.currentPage * this.state.perPage) - (this.state.perPage),
        currentPageEnd: ((this.state.currentPage * this.state.perPage) - 1),
        currentVisibleInv: this.state.data.slice(13, 24),
      }, function () {
        // console.log('displayUpdateOnPageChange')
        console.log('>1')
        console.log("currentPage: " + this.state.currentPage + "-" + " currentPageStart: " + this.state.currentPageStart + "-" + "CurrentPageEnd: " + this.state.currentPageEnd);
        // console.log(this.state);
      });
    }
    // console.log('displayUpdateOnPageChange')
    // console.log(currentPage);
    // console.log(this.state);
  };

  setCurrentpage = data => {
    this.setState({
      currentPage: data.selected + 1,
    }
    , this.displayUpdateOnPageChange());
    // console.log('setCurrentPage');
    // console.log(this.state.currentPage);
  }

  handlePageClick = data => {
    // console.log(data.selected + 1);
    this.setCurrentpage(data);
    // console.log(this.state.currentPage);
  };

  render() {
    return (
      <div>
        <Navbar />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={20}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          url={'http://localhost:3000/'}
        // perPage={12}
        />
        <div className='row product-cont'>
          {this.state.currentVisibleInv.map((info, i) => {
            return <Product key={i} product={info.product_name} pic={info.picture} description={info.description} item={info.item_number} />
          })
          }
        </div>


      </div >
    );
  }
}
export default Home;
