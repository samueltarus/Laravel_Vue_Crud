<template>
    <div>
        <h3 class="text-center">Create Order</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addProduct">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                    <div class="form-group">
                        <label>Product</label>
                        <input type="text" class="form-control" v-model="product.description">
                    </div>
                     <div class="form-group">
                        <label>Enter Amount</label>
                        <input type="text" class="form-control" v-model="product.quantity">
                    </div>
                    <button type="submit" class="btn btn-primary">Create Order</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: {}
            }
        },
        methods: {
            addProduct() {
                this.axios
                    .post('http://127.0.0.1:8000/api/make-order', this.product)
                    .then(response => (
                        this.$router.push({ name: 'orders' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
    console.log("Order Made");
</script>
