<template>
  <v-card>
    <v-container>
      <v-row align="center" justify="center">
        <v-col md="4">
          <v-img
            :src="`http://${imageURL}`"
            class="grey lighten-2"
            >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
                >
                <v-progress-circular indeterminate color="grey lighten-5">
                </v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
        <v-col md="8">
          <distribution-comparison-chart
            :chart-data="chartData"
            @data-point-click="onDataPointClick"></distribution-comparison-chart>
        </v-col>
        <v-expand-transition>
          <annotators-detail-pane
            v-if="showAnnotatorsDetail">
          </annotators-detail-pane>
        </v-expand-transition>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import DistributionComparisonChart from '@/components/charts/DistributionComparisonChart.vue'
import AnnotatorsDetailPane from '@/components/AnnotatorsDetailPane.vue'
export default {
  name: 'TaskDetailPane',
  components: {
    DistributionComparisonChart,
    AnnotatorsDetailPane
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
            backgroundColor: 'f5c42d',
            data: this.overallDistribution
          },
          {
            label: 'Selected',
            backgroundColor: '#f87979',
            data: this.selectedDistribution
          }
        ]
      }
    }
  },
  methods: {
    onDataPointClick: function (value) {
      console.log(value)
      this.showAnnotatorsDetail = true
    }
  },
  data: function () {
    return {
      showAnnotatorsDetail: false
    }
  }
}
</script>

<style scoped>

</style>
