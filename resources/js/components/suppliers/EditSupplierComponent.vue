<template>
    <div>
        <h3 class="text-center">Edit Supplier</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateProduct">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="supplier.name">
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
                supplier: {}
            }
        },
        created() {
            this.axios
                .get('http://127.0.0.1:8000/api/edit-supplier/${this.$route.params.id}')
                .then((res) => {
                    this.supplier = res.data;
                    console.log(res.data)

                });
        },
        methods: {
            updateProduct() {
                this.axios
                    .patch('http://127.0.0.1:8000/api/update-supplier/${this.$route.params.id}', this.supplier)
                    .then((res) => {
                        this.$router.push({ name: 'suppliers'});
                    });
            }
        }
    }
</script>
