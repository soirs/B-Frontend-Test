import React, { useState, useEffect } from 'react';
import ProductData from '../assets/product_list.json';
import ProductItem from './product-item';
import Pagination from './pagination';
import { sortProductsPriceAsc, sortProductsPriceDesc } from './helpers';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setProducts(ProductData);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className='product-list__sort'>
        <button
          className='btn btn-secondary'
          onClick={() => sortProductsPriceAsc(products, setProducts)}
        >
          Price low - high
        </button>
        <button
          className='btn btn-secondary'
          onClick={() => sortProductsPriceDesc(products, setProducts)}
        >
          Price high - low
        </button>
      </div>
      <div className='product-list'>
        {currentProducts.map((product) => {
          const {
            id,
            product_name,
            brand_name,
            actual_price,
            base_price,
            filename,
          } = product;
          return (
            <ProductItem
              key={id}
              loading={loading}
              id={id}
              product_name={product_name}
              brand_name={brand_name}
              actual_price={actual_price}
              base_price={base_price}
              filename={filename}
            />
          );
        })}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default ProductList;
