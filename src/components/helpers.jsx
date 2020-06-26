import React from 'react';

// Format price according to currency
export const currencyFormat = (number, currency) => {
  const RoundedNumber = Math.ceil(number);
  return new Intl.NumberFormat('da-DK', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  }).format(RoundedNumber);
};

// Display price in the preffered currency along with the "before" price
export const displayPrice = (actual_price, base_price, currency) => {
  const actual = currencyFormat(actual_price, currency);
  const base = currencyFormat(base_price, currency);

  // No price change
  if (actual === base) {
    return <p className='product-item__price'>{actual}</p>;
  } else {
    return (
      <p className='product-item__price'>
        <span className='product-item__price-discount'>{actual}</span>{' '}
        <span className='product-item__price-base'>{base}</span>
      </p>
    );
  }
};

// Red discount bubble on top of product
export const discountPercentage = (actual_price, base_price) => {
  if (actual_price === base_price) return null;

  const Discount = (actual_price / base_price) * 100;
  return (
    <div className='product-item__discount-percent'>
      {`${Discount.toFixed(0)}%`}
    </div>
  );
};

// Price sorter
export const sortProductsPriceDesc = (products, setProducts) => {
  const sortedDesc = [...products].sort((a, b) => {
    return b.actual_price - a.actual_price;
  });
  setProducts(sortedDesc);
};
export const sortProductsPriceAsc = (products, setProducts) => {
  const sortedAsc = [...products].sort((a, b) => {
    return a.actual_price - b.actual_price;
  });
  setProducts(sortedAsc);
};
