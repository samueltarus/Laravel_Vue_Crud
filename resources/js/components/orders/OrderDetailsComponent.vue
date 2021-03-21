
<template>
    <div>
        <h2 class="text-center">Order Details</h2>

        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Order Number</th>
                <th>Product Number</th>
                <th>Actions</th>

            </tr>
            </thead>
            <tbody>
                <tr v-for="orderdetail in orderdetails" :key="orderdetail.id">
                 <td>{{ orderdetail.id }}</td>
                 <td>{{ orderdetail.order_id }}</td>
                <td>{{ orderdetail.product_id }}</td>
                     <td>
                    <div class="btn-group" role="group">
                        <!-- <router-link :to="{name:'edit-orderdetail', params: { id:orderdetail.id }}" class="btn btn-success">Edit</router-link> -->
                        <button class="btn btn-danger" @click="deleteOrderDetails(orderdetail.id)">Delete</button>
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
          orderdetails: []
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
            deleteOrderDetails(id) {
                this.axios
                    .delete('http://127.0.0.1:8000/api/delete-supplier/${id}')
                    .then(response => {
                        let i = this.orderdetail.map(data => data.id).indexOf(id);
                        this.orderdetail.splice(i, 1)
                    });
            }
        }
  }
</script>

