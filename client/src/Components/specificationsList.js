import React from 'react';

export default function Specifications(props) {
    return (
        <ul className={'list-group col-12 ' + props.class}>
          <li className="list-group-item">Specifications</li>
          <li className="list-group-item">Item# {props.item}</li>
          <li className="list-group-item">Weight: {props.weight}lbs</li>
          <li className="list-group-item">Units: {props.units}</li>
          <li className="list-group-item">Price: ${props.price}</li>
          <li className="list-group-item"><a href={'/' + props.category + '/' + props.subcategory} >{props.subcategory}</a></li>
          <button type="button" id='add-cart-btn' className="btn btn-primary">Add to Cart</button>
        </ul>
    );
};