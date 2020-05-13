import React from 'react';
import { Link } from 'react-router-dom';


export default function cartButton(props) {
  return (
    <div className="form-group">
    <label for="exampleFormControlSelect1">Quantity</label>
    <select className="form-control" id="quantity-select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>
    <button type="button" id='add-cart-btn' className="btn btn-primary" onClick={ () => props.onCartButtonClick(document.getElementById("quantity-select").value)}>Add to Cart</button>
  </div>
  )

};