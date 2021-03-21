<template>
    <div>
        <h3 class="text-center">Edit Product</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateProduct">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                   <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control" v-model="product.description">
                    </div>
                     <div class="form-group">
                        <label>Quantity</label>
                        <input type="text" class="form-control" v-model="product.quantity">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
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
        created() {
            this.axios
                .get('http://127.0.0.1:8000/api/edit-product/${this.$route.params.id}')
                .then((res) => {
                    this.product = res.data;
                    console.log(res.data)

                });
        },
        methods: {
            updateProduct() {
                this.axios
                    .patch('http://127.0.0.1:8000/api/update-product/${this.$route.params.id}', this.product)
                    .then((res) => {
                        this.$router.push({ name: 'products'});
                    });
            }
        }
    }
</script>
