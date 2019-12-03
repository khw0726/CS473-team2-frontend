<script>
import { HorizontalBar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  name: 'DistanceComparisonChart',
  extends: HorizontalBar,
  mixins: [reactiveProp],
  computed: {
    options: function () {
      return {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          filter: (category, data) => {
            const label = data.datasets[category.datasetIndex].label
            return (label === 'min' || label === 'max' || label === 'avg')
          },
          callbacks: {
            label: function (tooltipItem, data) {
              const label = data.datasets[tooltipItem.datasetIndex].label || ''

              const labelNumber = data.datasets[tooltipItem.datasetIndex].labels[tooltipItem.index]
              return `${label}: ${labelNumber}`
            }
          }
        },
        scales: {
          xAxes: [{
            id: 'bar-x-axis0',
            stacked: true,
            ticks: {
              min: 0,
              max: 4,
              beginAtZero: true
            }
          },
          {
            id: 'bar-x-axis1', // crazy trick to draw average bars
            type: 'linear', // axis types need to be specified because it cannot be inferred from the 2nd axis
            ticks: {
              min: 0,
              max: 4,
              beginAtZero: true
            },
            display: false,
            stacked: true
          }],
          yAxes: [{
            id: 'bar-y-axis0',
            barPercentage: 0.5,
            stacked: true
          },
          {
            id: 'bar-y-axis1', // crazy trick to draw average bars #2
            type: 'category',
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            display: false,
            offset: true, // to place the bar in the center
            stacked: true
          }]
        }
      }
    }
  },
  mounted: function () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
<style scoped>

</style>
