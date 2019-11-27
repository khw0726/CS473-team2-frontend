<script>
import { HorizontalBar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  name: 'DistanceComparisonChart',
  extends: HorizontalBar,
  props: {
    data: Object
  },
  mixins: [reactiveProp],
  computed: {
    options: function () {
      return {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    }
  },
  mounted: function () {
    this.renderChart(this.data, this.options)
  }
}
</script>
<style scoped>

</style>
