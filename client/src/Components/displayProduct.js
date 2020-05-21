import React from 'react';
import { Link } from 'react-router-dom';
import List from '../Components/categoryList';
import Specifications from '../Components/specificationsList';
import Featured from '../Components/featuredProductCarousel';


function productDisplay(props) {
  return (
    <div className='row product-display' >
      <div classname='col-12' id='breadcrumb-trail'>
        <Link to='/' className='breadcrumbs'>Home</Link> /
          <Link to={'/category=' + props.category} className='breadcrumbs'> {props.category} </Link> /
          <Link to={'/category=' + props.category + '/subcat=' + props.subcategory} className='breadcrumbs'> {props.subcategory} </Link> /
          <Link to={'/category=' + props.category + '/subcat=' + props.subcategory + '/product=' + props.product} className='breadcrumbs'> {props.product} </Link>
      </div>
      <div className='row product-display'>
        <List class='desktop-only col-2' />
        <div className='col-12 col-md-6 col-lg-5'>
          <img src={props.img} id='product-img' alt={props.item} />
          <Specifications
            class='desktop-only'
            item={props.item}
            weight={props.weight}
            units={props.units}
            price={props.price}
            category={props.category}
            subcategory={props.subcategory}
            onCartButtonClick={props.onCartButtonClick}
          />
        </div>
        <div className='col-12 col-md-6 col-lg-5' >
          <h1 className='col-12' id='product-page-name'>{props.product}</h1>
          <br /><br />
          <p className='col-12' id='product-page-description'>{props.description}</p>
          <Featured url={props.url} />
        </div>
        <Specifications
          class='small-screen-toggle'
          item={props.item}
          weight={props.weight}
          units={props.units}
          price={props.price}
          category={props.category}
          subcategory={props.subcategory}
          onCartButtonClick={props.onCartButtonClick}
        />
      </div>
    </div>
  );
}

export default productDisplay;