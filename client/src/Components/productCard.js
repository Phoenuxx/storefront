import React from 'react';
import CartButton from './cartButton';
import { Link } from 'react-router-dom';
function ProductCard(props) {

  return (
    <Link to={'/category=' + props.category + '/subcat=' + props.subcategory + '/product=' + props.product} className="card product-card col-11 col-md-4 col-lg-3">
      <div className='img-wrapper row'>
        <img src={props.pic} className="card-img-top col-12" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.product}</h5>
        <p className="card-text card-description">{props.description.split(/\s+/).slice(0, 10).join(' ') + '...'}</p>
        <br />
        <p className='card-text item-num'>Item# {props.item}</p>
        <CartButton />
      </div>
    </Link>
  )
};

export default ProductCard;
