
<template>
    <div>
        <h2 class="text-center">Orders List</h2>

        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Order Number</th>
                <th>Actions</th>

            </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                 <td>{{ order.id }}</td>
                <td>{{ order.name }}</td>
                     <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name:'edit-order', params: { id:order.id }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteOrder(order.id)">Delete</button>
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
          orders: []
        }
      },
      created() {
      let uri = 'http://127.0.0.1:8000/api/suppliers';
      this.axios.get(uri).then(response => {
          console.log(response.data)
        this.orders = response.data;

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

