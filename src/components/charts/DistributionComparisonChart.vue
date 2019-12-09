<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  name: 'DistributionComparisonChart',
  extends: Bar,
  mixins: [reactiveProp],
  mounted: function () {
    this.renderChart(this.chartData, this.options)
  },
  methods: {
    onClickHandler: function (e) {
      const elem = this.$data._chart.getElementAtEvent(e)[0]
      if (typeof elem._index === 'number') {
        this.$emit('data-point-click', elem._index + 1)
      }
    }
  },
  data: function () {
    return {
      options: {
        scales: {
          yAxes: [{
            id: 'bar-y-axis0',
            scaleLabel: {
              display: true,
              labelString: 'Overall'
            }
          }
          // {
          //   id: 'bar-y-axis1',
          //   type: 'linear',
          //   position: 'right',
          //   scaleLabel: {
          //     display: true,
          //     labelString: 'Selected group'
          //   }
          // }
          ]
        },
        onClick: (e) => {
          // console.log(this)
          this.onClickHandler(e)
        }
      }
    }
  }
}
</script>
