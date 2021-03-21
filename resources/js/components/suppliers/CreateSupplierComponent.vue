<template>
    <div>
        <h3 class="text-center">Create Supplier</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addSupplier">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="supplier.name">
                    </div>

                    <button type="submit" class="btn btn-primary">Create</button>
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
        methods: {
            addSupplier() {
                this.axios
                    .post('http://127.0.0.1:8000/api/create-supplier', this.supplier)
                    .then(response => (
                        window.location.reload()
                        // this.$router.push({ name: 'suppliers' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
    console.log("Create Supplier");
</script>
