import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard(props) {
  var url = props.product.split(' ').join('-');
  // console.log(url)
  return (
    <Link to={'/category=' + url} className="card category-card col-11 col-md-4 col-lg-3">
      <div className='img-wrapper row'>
        <img src={props.pic} className="card-img-top col-12" alt="..." />
      </div>
      <div className="card-body">
        <h1 className="card-title">{props.product}</h1>
        <br />
      </div>
    </Link>
  )
}

export default CategoryCard;
