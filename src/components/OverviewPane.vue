
<template>
  <div>
    <div>
      <p class="font-weight-bold">DEMOGRAPHIC CATEGORIES</p>
      <v-divider></v-divider>
      <div class="float-xl-left"></div><br>
    </div>
    <div class="selector"
      v-if="categories">
      <v-chip
        v-for="label in Object.keys(categories)"
        :key="label"
        @click="onCategoriesSelectorClick(label)"
        :color="selectedDemographic === label ? 'purple lighten-5' : ''"
        :text-color="selectedDemographic === label ? 'purple darken-3' : ''"
        >
        {{label}}
      </v-chip>
    </div>
    <div v-else>
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <div>
      <div class="float-xl-left"></div><br>
    </div>
    <div>
      <div class="float-xl-left"></div><br>
      <p class="font-weight-bold">DESCRIPTIVE STATISTICS</p>
      <v-divider></v-divider>
      <div class="float-xl-left"></div><br>
    </div>
    <div class="chart" v-if="demographics">
      <v-simple-table
        dense
        fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Category</th>
              <th class="text-left"># of workers</th>
              <th class="text-left">Min. Distance</th>
              <th class="text-left">Max. Distance</th>
              <th class="text-left">Avg. Distance</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, label) in demographics" :key="label">
              <td>{{ label }}</td>
              <td>{{ value.count }}</td>
              <td>{{ Math.round(value.min * 100) / 100 }}</td>
              <td>{{ Math.round(value.max * 100) / 100 }}</td>
              <td>{{ Math.round(value.avg * 100) / 100  }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="chartContainer">
        <distance-comparison-chart
          :chart-data="chartData"
          :styles="myStyles"
          >
        </distance-comparison-chart>
      </div>
    </div>
    <div v-else-if="!demographics && demographicsLoading">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <div v-else>
      Please choose a demographic category of interest first!
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DistanceComparisonChart from '@/components/charts/DistanceComparisonChart'
export default {
  name: 'OverviewPane',
  components: {
    DistanceComparisonChart
  },
  computed: {
    ...mapState({
      categories: 'categories',
      demographics: 'demographics'
    }),
    chartData: function () {
      // const min = []
      // const maxLabels = []
      // const max = []
      const between = []
      // const average = []
      const zeros = []
      const med = []
      const firstQ = []
      const thirdQ = []
      const thirdQLabels = []
      const labels = Object.keys(this.demographics)

      labels.forEach((label) => {
        firstQ.push(this.demographics[label]['1q'])
        between.push(this.demographics[label]['3q'] - this.demographics[label]['1q'])
        thirdQ.push(4 - this.demographics[label]['3q'])
        thirdQLabels.push(this.demographics[label]['3q'])
        med.push(this.demographics[label].med)
        zeros.push(0.03)

        // between.push(this.demographics[label].max - this.demographics[label].min)
        // maxLabels.push(this.demographics[label].max)
        // min.push(this.demographics[label].min)
        // max.push(4 - this.demographics[label].max)
        // average.push(this.demographics[label].avg)
        // zeros.push(0.03)
      })

      return {
        labels: labels,
        datasets: [
          // {
          //   label: 'min',
          //   backgroundColor: 'rgba(255, 99, 132, 0)',
          //   data: min,
          //   labels: min,
          //   // stack: 'Stack 0',
          //   xAxisID: 'bar-x-axis0',
          //   yAxisID: 'bar-y-axis0'
          // },
          // {
          //   label: 'max',
          //   backgroundColor: '#f87979',
          //   data: between,
          //   labels: maxLabels,
          //   // stack: 'Stack 0',
          //   xAxisID: 'bar-x-axis0',
          //   yAxisID: 'bar-y-axis0'
          // },
          // {
          //   label: 'remain',
          //   backgroundColor: 'rgba(255, 99, 132, 0)',
          //   data: max,
          //   // stack: 'Stack 0',
          //   xAxisID: 'bar-x-axis0',
          //   yAxisID: 'bar-y-axis0'
          // },
          // {
          //   label: 'avg',
          //   backgroundColor: 'rgba(255, 99, 132, 0)',
          //   data: average,
          //   labels: average,
          //   // stack: 'Stack 1',
          //   xAxisID: 'bar-x-axis1',
          //   yAxisID: 'bar-y-axis1'
          // },
          // {
          //   label: 'zeros',
          //   backgroundColor: '#000000',
          //   data: zeros,
          //   // stack: 'Stack 1',
          //   xAxisID: 'bar-x-axis1',
          //   yAxisID: 'bar-y-axis1'
          // },
          {
            label: '1Q',
            backgroundColor: 'rgba(255, 99, 132, 0)',
            data: firstQ,
            labels: firstQ,
            // stack: 'Stack 0',
            xAxisID: 'bar-x-axis0',
            yAxisID: 'bar-y-axis0'
          },
          {
            label: '3Q',
            backgroundColor: '#E1BEE7',
            data: between,
            labels: thirdQLabels,
            // stack: 'Stack 0',
            xAxisID: 'bar-x-axis0',
            yAxisID: 'bar-y-axis0'
          },
          {
            label: 'remain',
            backgroundColor: 'rgba(255, 99, 132, 0)',
            data: thirdQ,
            // stack: 'Stack 0',
            xAxisID: 'bar-x-axis0',
            yAxisID: 'bar-y-axis0'
          },
          {
            label: 'median',
            backgroundColor: 'rgba(255, 99, 132, 0)',
            data: med,
            labels: med,
            // stack: 'Stack 1',
            xAxisID: 'bar-x-axis1',
            yAxisID: 'bar-y-axis1'
          },
          {
            label: 'zeros',
            backgroundColor: '#000000',
            data: zeros,
            // stack: 'Stack 1',
            xAxisID: 'bar-x-axis1',
            yAxisID: 'bar-y-axis1'
          }
        ]
      }
    },
    remSize: function () {
      return parseFloat(getComputedStyle(document.documentElement).fontSize)
    },
    numLabels: function () { // number of categories in each attribute, like for location, it might be 50
      const labels = Object.keys(this.demographics)
      return labels.length
    },
    myStyles: function () {
      return {
        height: `${2.5 * this.remSize * this.numLabels}px`,
        position: 'relative',
        width: '100%'
      }
    }
  },
  data: function () {
    return {
      selectedDemographic: '',
      demographicsLoading: false
    }
  },
  methods: {
    onCategoriesSelectorClick: async function (label) {
      this.selectedDemographic = label
      this.demographicsLoading = true
      await this.$store.dispatch('fetchDemographics', label)
      this.demographicsLoading = false
    }
  }
}
</script>

<style scoped>
  p{margin-left:5px}
  .v-chip {margin-right: 5px;}
  .v-chip {margin-bottom : 8px;}
</style>
