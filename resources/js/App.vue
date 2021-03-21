<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link to="/dashboard" class="nav-item nav-link">Dashboard</router-link>
                    <router-link to="/products" class="nav-item nav-link">Products List</router-link>
                     <router-link to="/suppliers" class="nav-item nav-link">Supplies List</router-link>
                    <router-link to="/create-product" class="nav-item nav-link">Create Product</router-link>
                    <router-link to="/create-supplier" class="nav-item nav-link">Create Supplier</router-link>
                      <router-link to="/make-order" class="nav-item nav-link">Make Order</router-link>
                    <router-link to="/order-details" class="nav-item nav-link">Order Details</router-link>
                </div>
            </div>
        </nav>

        <router-view> </router-view>
    </div>
</template>

<script>
    export default {}
</script>
