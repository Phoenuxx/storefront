import React from 'react';

function ProductCard(props) {

  return (
    <a href={'/' + props.category + '/' + props.subcategory + '/' + props.product} className="card product-card col-11 col-md-4 col-lg-3">
      <div className='img-wrapper row'>
        <img src={props.pic} className="card-img-top col-12" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.product}</h5>
        <p className="card-text card-description">{props.description.split(/\s+/).slice(0, 10).join(' ') + '...'}</p>
        <br />
        <p className='card-text item-num'>Item# {props.item}</p>
        <a href={props.id} className="btn btn-primary">Add To Cart</a>
      </div>
    </a>
  )
};

export default ProductCard;
