import React from 'react';
import CartButton from './cartButton';
import { Link } from 'react-router-dom';

export default function Specifications(props) {
  return (
    <ul className={'list-group col-12 ' + props.class}>
      <li className="list-group-item">Specifications</li>
      <li className="list-group-item">Item# {props.item}</li>
      <li className="list-group-item">Weight: {props.weight}lbs</li>
      <li className="list-group-item">Units: {props.units}</li>
      <li className="list-group-item">Price: ${props.price}</li>
      <li className="list-group-item"><Link to={'/category=' + props.category + '/subcat=' + props.subcategory} >{props.subcategory}</Link></li>
      <CartButton onCartButtonClick={props.onCartButtonClick} />
    </ul>
  );
};