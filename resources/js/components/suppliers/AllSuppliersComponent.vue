
<template>
    <div>
        <h2 class="text-center">Suppliers List</h2>

        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>

            </tr>
            </thead>
            <tbody>
                <tr v-for="supplier in suppliers" :key="supplier.id">
                 <td>{{ supplier.id }}</td>
                <td>{{ supplier.name }}</td>
                     <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name:'edit-supplier', params: { id:supplier.id }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteSupplier(supplier.id)">Delete</button>
                    </div>
                </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>

  export default {
      data() {
        return {
          suppliers: []
        }
      },
      created() {
      let uri = 'http://127.0.0.1:8000/api/suppliers';
      this.axios.get(uri).then(response => {
          console.log(response.data)
        this.suppliers = response.data;

      });
    },
    methods: {
            deleteSupplier(id) {
                this.axios
                    .delete('http://127.0.0.1:8000/api/delete-supplier/${id}')
                    .then(response => {
                        let i = this.suppliers.map(data => data.id).indexOf(id);
                        this.suppliers.splice(i, 1)
                    });
            }
        }
  }
</script>

