<template>
  <v-card>
    <v-row>
      <v-col md="4">
        <v-img src="imageURL" width="100%">
        </v-img>
      </v-col>
      <v-col md="8">
        <distribution-comparison-chart
          :data="chartData"></distribution-comparison-chart>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import DistributionComparisonChart from '@/components/charts/DistributionComparisonChart.vue'
export default {
  name: 'TaskDetailPane',
  components: {
    DistributionComparisonChart
  },
  props: {
    imageID: String,
    imageURL: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png'
    },
    overallDistribution: {
      type: Array,
      default: function () {
        return [0, 4, 3, 1, 0]
      }
    },
    selectedDistribution: {
      type: Array,
      default: function () {
        return [0, 3, 0, 0, 0]
      }
    }
  },
  computed: {
    chartData: function () {
      return {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: 'Overall',
            backgroundColor: '#f87979',
            data: this.overallDistribution
          },
          {
            label: 'Selected',
            backgroundColor: '#79f879',
            data: this.selectedDistribution
          }
        ]
      }
    }
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
