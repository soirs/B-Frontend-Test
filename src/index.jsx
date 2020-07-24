import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss'; // global style file
import Header from './components/header';
import ProductList from './components/product-list';

ReactDOM.render(
  <React.StrictMode>
    <div className='App'>
      <Header />
      <ProductList />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

module.hot.accept();
