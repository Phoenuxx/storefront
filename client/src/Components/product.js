import React, { Component } from 'react';

function ProductCard(props) {

  return (
    <div className="card col-11 col-md-3" >
      <img src={props.pic} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product}</h5>
        <p className="card-text">{props.descript}</p>
        <br />
        <p className='card-text'>Item#{props.item}</p>
        <a href="#" className="btn btn-primary">Add To Cart</a>
      </div>
    </div>

  )
}

export default ProductCard;
