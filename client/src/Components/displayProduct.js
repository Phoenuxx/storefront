import React from 'react';
import List from '../Components/categoryList';
import Specifications from '../Components/specificationsList';

function productDisplay(props) {
  return (
    <div>
      <div className='row' id='product-display'>
        <div classname='col-12' id='breadcrumb-trail'>
          <a href='/' className='breadcrumbs'>Home</a> /
          <a href={'/' + props.category} className='breadcrumbs'> {props.category} </a> /
          <a href={'/' + props.category + '/' + props.subcategory} className='breadcrumbs'> {props.subcategory} </a> /
          <a href={'/' + props.category + '/' + props.subcategory + '/' + props.product} className='breadcrumbs'> {props.product} </a>
        </div>
        <div className='row'>
          <List class='desktop-only col-2' />
          <div className='col-12 col-md-6 col-lg-5'>
            <img src={props.img} id='product-img' />
            <Specifications
              class='desktop-only'
              item={props.item}
              weight={props.weight}
              units={props.units}
              price={props.price}
              category={props.category}
              subcategory={props.subcategory}
            />
          </div>
          <div className='col-12 col-md-6 col-lg-5'>
            <h1 className='col-12' id='product-name'>{props.product}</h1>
            <br /><br />
            <p className='col-12' id='product-description'>{props.description}</p>
          </div>
          <Specifications
              class='small-screen-toggle'
              item={props.item}
              weight={props.weight}
              units={props.units}
              price={props.price}
              category={props.category}
              subcategory={props.subcategory}
            />
        </div>
      </div>
    </div>
  );
}

export default productDisplay;