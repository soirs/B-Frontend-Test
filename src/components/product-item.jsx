import React from 'react';
import { discountPercentage, displayPrice } from './helpers';

const ProductItem = ({
  loading,
  id,
  product_name,
  brand_name,
  actual_price,
  base_price,
  filename,
}) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div key={id} className='product-item'>
      <a
        href='/'
        title={`Go to ${product_name} product page`}
        className='product-item__link'
      >
        <img
          src={filename}
          alt={product_name}
          className='product-item__image'
        />
        {discountPercentage(actual_price, base_price)}
      </a>
      <div className='product-item__info'>
        <span className='product-item__brand'>{brand_name}</span>
        <span className='product-item__name'>{product_name}</span>
        {displayPrice(actual_price, base_price, 'DKK')}
      </div>
    </div>
  );
};

export default ProductItem;
