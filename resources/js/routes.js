

// Dashboards
import Dashboard from './components/DashboardComponent';
// products imports
import AllProduct from './components/products/AllProductsComponent';
import CreateProduct from './components/products/CreateProductComponent';
import ShowProduct from './components/products/ShowProductComponent';
import EditProduct from './components/products/ShowProductComponent';

// supplier Imports
import AllSupplier from './components/suppliers/AllSuppliersComponent';
import CreateSupplier from './components/suppliers/CreateSupplierComponent';
import ShowSupplier from './components/suppliers/ShowSupplierComponent';
import EditSupplier from './components/suppliers/EditSupplierComponent';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Dashboard
    },
    {
        name: 'products',
        path: '/products',
        component: AllProduct
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
    ///////////////supplier///

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
    }
];
