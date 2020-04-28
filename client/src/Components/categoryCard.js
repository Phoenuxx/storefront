import React from 'react';

function CategoryCard(props) {

  return (
    <a href={'/products/' + props.product} className="card category-card col-11 col-md-4 col-lg-3">
        <div className='img-wrapper row'>
          <img src={props.pic} className="card-img-top col-12" alt="..." />
        </div>
        <div className="card-body">
          <h1 className="card-title">{props.product}</h1>
          <br />
        </div>
    </a>
  )
}

export default CategoryCard;
