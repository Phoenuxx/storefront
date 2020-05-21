import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Components/productCard';
import List from '../Components/categoryList';
import Specifications from '../Components/specificationsList';
import Featured from '../Components/featuredProductCarousel';


export default function displayProduct(props) {
    return (
        <div className='row' id='category-page'>
            <div className='col-2'>
                <List class='desktop-only' id='list-group' />
            </div>
            <div className='col-12 col-lg-10'>
                <div className='row product-cont'>
                    {props.product.map((info, i) => {
                        return <Product key={i} id={info.id} product={info.product_name} pic={info.picture} description={info.description} item={info.item_number} category={info.category} subcategory={info.subCategory} />
                    })
                    }
                </div>
            </div>
        </div>
    )
}