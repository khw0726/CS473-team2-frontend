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
            v-if="showAnnotatorsDetail && annotators"
            :annotators="annotators"
            :value="selectedValue">
          </annotators-detail-pane>
          <v-progress-circular indeterminate
            v-else-if="showAnnotatorsDetail">
          </v-progress-circular>
        </v-expand-transition>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
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
    ...mapState({
      API_URL: 'API_URL'
    }),
    chartData: function () {
      return {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: 'Overall',
            backgroundColor: '#E1BEE7',
            data: this.overallDistribution,
            yAxisID: 'bar-y-axis0'
          },
          {
            label: 'Selected',
            backgroundColor: '#8E24AA',
            data: this.selectedDistribution,
            yAxisID: 'bar-y-axis0'
          }
        ]
      }
    }
  },
  watch: {
    imageID: function () {
      this.annotators = []
      this.showAnnotatorsDetail = false
    }
  },
  methods: {
    onDataPointClick: async function (value) {
      this.showAnnotatorsDetail = true
      // console.log(this.axios)
      if (this.annotators.length === 0) {
        const res = await this.axios.get(`${this.API_URL}/img/${this.imageID}/`)
        this.annotators = res.data.workers
      }
      this.selectedValue = value
    }
  },
  data: function () {
    return {
      showAnnotatorsDetail: false,
      annotators: [],
      selectedValue: null
    }
  }
}
</script>

<style scoped>

</style>
