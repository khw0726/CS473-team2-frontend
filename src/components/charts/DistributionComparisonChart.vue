<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  name: 'DistributionComparisonChart',
  extends: Bar,
  props: {
    data: Object
  },
  mixins: [reactiveProp],
  mounted: function () {
    this.renderChart(this.data)
  }
}
</script>
