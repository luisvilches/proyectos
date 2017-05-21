import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory , Router, Route } from 'react-router'; 
import BaseComponents from './components/baseComponent/baseComponent';
import CategoryShop from './components/categoShop/categoryShop';
import Banners from './components/banners/banner';
import Product from './components/products/product';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="" component={ BaseComponents }>
      <Route path="/" component={ Banners }/>
      <Route path="/:category" component={ CategoryShop }/>
      <Route path="/:category/:product" component={ Product }/>
    </Route>
  </Router>,
  document.getElementById('root')
);
