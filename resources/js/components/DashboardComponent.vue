
<template>
    <div>
        <h2 class="text-center">Products Chart</h2>
     <canvas ref="chart"></canvas>

    </div>



</template>


<script>
    export default{
        mounted() {
        let uri = 'http://127.0.0.1:8000/api/product-chart';
        axios.get(uri).then((response) => {
        var chart = this.$refs.chart;
            var ctx = chart.getContext("2d");
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: response.data.month,
                    datasets: [{
                        label: '# of Products',
                        data: response.data.data,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }).catch(error => {
        console.log(error)
        this.errored = true
      });
        }
    }
</script>

