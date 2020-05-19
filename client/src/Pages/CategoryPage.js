import React, { Component } from 'react';
import Navbar from '../Components/navbar';
import Product from '../Components/productCard';
import Footer from '../Components/footer';
import ReactPaginate from 'react-paginate';
import API from "../Utils/API";
import List from '../Components/categoryList';

class CategoryPage extends Component {

  //set initial state
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      data: [],
      currentPage: 1,
      currentPageStart: 0,
      currentPageEnd: 12,
      perPage: 12,
      currentVisibleInv: []
    }
  };


  //calls API function before component mounts
  componentDidMount() {
    this.loadInv();
  }

  //Initial API call to pull product data
  loadInv = () => {
    if (this.props.match.params.subcategory) {
      this.subcategoryCall(this.props.match.params.category.split('-').join(' '), this.props.match.params.subcategory.split('-').join(' '));
      // console.log(this.props.match.params.category.split('-').join(' '), this.props.match.params.subcategory.split('-').join(' '));
    } else {
      this.categoryCall(this.props.match.params.category.split('-').join(' '));
      // console.log(this.props.match.params.category.split('-').join(' '));
    }
  }

  categoryCall = (category) => {
    API.getCategory(category)
      .then(res => {
        this.setState(
          {
            data: res.data,
            currentVisibleInv: res.data.slice(this.state.currentPageStart, this.state.currentPageEnd),
            pageCount: Math.ceil(res.data.length / 12)
          });
        console.log(res)
        // console.log("currentPage: " + this.state.currentPage + "-" + " currentPageStart: " + this.state.currentPageStart + "-" + "CurrentPageEnd: " + this.state.currentPageEnd);
        // console.log(this.state.currentVisibleInv);
        // console.log(this.state.currentVisibleInv);
      })
      .catch(err => console.log(err));
  };

  subcategoryCall = (cat, subcat) => {
    API.getSubCategory(cat, subcat)
      .then(res => {
        this.setState(
          {
            data: res.data,
            currentVisibleInv: res.data.slice(this.state.currentPageStart, this.state.currentPageEnd),
            pageCount: Math.ceil(res.data.length / 12)
          });
        console.log(res)
        // console.log("currentPage: " + this.state.currentPage + "-" + " currentPageStart: " + this.state.currentPageStart + "-" + "CurrentPageEnd: " + this.state.currentPageEnd);
        // console.log(this.state.currentVisibleInv);
      })
      .catch(err => console.log(err));
  };


  //updates visible inventory to be displayed on page
  //TODO look into drying up this function, maybe splitting into 2 functions
  displayUpdateOnPageChange = () => {

    let currentPage = this.state.currentPage
    //if page 1 is selected to account for starting id:0
    if (currentPage === 1) {
      this.setState({
        currentPageStart: 0,
        currentPageEnd: currentPage * this.state.perPage,
        currentVisibleInv: this.state.data.slice(this.state.currentPageStart, this.state.currentPageEnd),
      }, function () {
        this.setState({
          currentVisibleInv: this.state.data.slice(this.state.currentPageStart, this.state.currentPageEnd),
        });
        // console.log('=1');
        // console.log("currentPage: " + this.state.currentPage + "-" + " currentPageStart: " + this.state.currentPageStart + "-" + "CurrentPageEnd: " + this.state.currentPageEnd);
        // console.log(this.state.currentVisibleInv);

      });
    }
    //else if any other page number
    else if (currentPage >= 2) {
      this.setState({
        currentPageStart: (this.state.currentPage * this.state.perPage) - (this.state.perPage),
        currentPageEnd: (this.state.currentPage * this.state.perPage),

      }, function () {
        // console.log('displayUpdateOnPageChange')
        this.setState({
          currentVisibleInv: this.state.data.slice(this.state.currentPageStart, this.state.currentPageEnd),
        });
        // console.log('>1');
        // console.log("currentPage: " + this.state.currentPage + "-" + " currentPageStart: " + this.state.currentPageStart + "-" + "CurrentPageEnd: " + this.state.currentPageEnd);
        // console.log(this.state.currentVisibleInv);
        // console.log(this.state);
      });

    };
  };


  //return to top of page on page change
  topOfPage = () => {
    const elmnt = document.getElementById("navbar");
    elmnt.scrollIntoView();
  }

  //uses pagination component's data to list current page
  setCurrentpage = data => {
    this.setState({
      currentPage: data.selected + 1,
    }
      , function () {
        this.displayUpdateOnPageChange();
      });
    this.topOfPage();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='row'>
          <div className='col-2'>
            <List class='desktop-only' />
          </div>
          <div className='col-12 col-lg-10'>
            <div className='row product-cont'>
              {this.state.currentVisibleInv.map((info, i) => {
                return <Product key={i} id={info.id} product={info.product_name} pic={info.picture} description={info.description} item={info.item_number} category={info.category} subcategory={info.subCategory} />
              })
              }
            </div>
          </div>
        </div>
        <div className='row'>
          {this.state.pageCount > 1 ?
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={this.setCurrentpage}
              containerClassName={'pagination col-12'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            // url={'http://localhost:3000/'}
            />
            : <div>1</div>}
        </div>
        <Footer />
      </div >
    );
  }
}
export default CategoryPage;