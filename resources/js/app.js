
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
import {Bar} from 'vue-chartjs';

import App from './App.vue';
Vue.use(VueAxios, axios);

import Dashboard from './components/DashboardComponent';

// product components
import AllProducts from './components/products/AllProductsComponent.vue';
import CreateProduct from './components/products/CreateProductComponent.vue';
import ShowProduct from './components/products/ShowProductComponent.vue';
import EditProduct from './components/products/EditProductComponent.vue';

//supplier components
import AllSupplier from './components/suppliers/AllSuppliersComponent.vue';
import CreateSupplier from './components/suppliers/CreateSupplierComponent.vue';
import ShowSupplier from './components/suppliers/ShowSupplierComponent.vue';
import EditSupplier from './components/suppliers/EditSupplierComponent.vue';

// order components

import AllOrders from './components/orders/AllOrdersComponent.vue';
import MakeOrder from './components/orders/MakeOrderComponent.vue';
import OrderDetails from './components/orders/OrderDetailsComponent.vue';

// charts

import ChartOrders from './components/charts/ChartOrdersComponent.vue';
import ChartProducts from './components/charts/ChartProductsComponent.vue';



const routes = [
  {
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard
  },
  {
    name: 'products',
    path: '/products',
    component: AllProducts
},
  {
      name: 'create-product',
      path: '/create-product',
      component: CreateProduct
  },
  {
      name: 'show-product',
      path: '/show-product/:id',
      component: ShowProduct
  },
  {
      name: 'edit-product',
      path: '/edit-product/:id',
      component: EditProduct
  },

//   Supplier
    {
        name: 'suppliers',
        path: '/suppliers',
        component: AllSupplier
    },
    {
        name: 'create-supplier',
        path: '/create-supplier',
        component: CreateSupplier
    },
    {
        name: 'show-supplier',
        path: '/show-supplier/:id',
        component: ShowSupplier
    },
    {
        name: 'edit-supplier',
        path: '/edit-supplier/:id',
        component: EditSupplier
    },
//   order routes
    {
        name: 'orders',
        path: '/orders',
        component: AllOrders
    },
  {
      name: 'make-order',
      path: '/make-order',
      component: MakeOrder
  },
  {
      name: 'order-details',
      path: '/order-details/:id',
      component: OrderDetails
  },

//   charts

{
    name: 'chart-orders',
    path: '/chart-orders',
    component: ChartOrders
},
{
    name: 'chart-products',
    path: '/chart-products',
    component: ChartProducts
}
];


const router = new VueRouter({ mode: 'history', routes: routes});

const dashboard = new Vue(Vue.util.extend({ router }, App)).$mount('#dashboard');
