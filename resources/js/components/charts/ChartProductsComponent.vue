
<template>

</template>

<script>

  export default {
      data() {
        return {
          orders: []
        }
      },
      created() {
      let uri = 'http://127.0.0.1:8000/api/product-chart';
      this.axios.get(uri).then(response => {
          console.log(response.data)
        this.orders = response.data;

      });
    }

  }
</script>

