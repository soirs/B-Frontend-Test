import React from 'react';
import './styles/app.scss'; // global style file
import Header from './components/header';
import ProductList from './components/product-list';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <ProductList />
    </div>
  );
};

export default App;
