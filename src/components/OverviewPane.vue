
<template>
  <div>
    <div>
      <v-divider></v-divider>
      <p class="font-weight-bold">DEMOGRAPHY</p>
      <v-divider></v-divider>
      <div class="float-xl-left"></div><br>
    </div>
    <div class="selector">
      <v-chip
        v-for="(value, label) in categories"
        :key="label"
        @click="onDemographicsSelectorClick(label)"
        :color="selectedDemographic === label ? 'purple lighten-5' : ''"
        :text-color="selectedDemographic === label ? 'purple darken-3' : ''"
        >
        {{label}}
      </v-chip>
    </div>
    <div>
      <div class="float-xl-left"></div><br>
    </div>
    <div>
      <v-divider></v-divider>
      <p class="font-weight-bold">DESCRIPTIVE STATISTICS</p>
      <v-divider></v-divider>
      <div class="float-xl-left"></div><br>
    </div>
    <div class="chart">
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
            <tr v-for="(value, label) in statistics" :key="label">
              <td>{{ label }}</td>
              <td>{{ value.count }}</td>
              <td>{{ value.min }}</td>
              <td>{{ value.max }}</td>
              <td>{{ value.avg }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div>
        <distance-comparison-chart
          :data="chartData"
          :height="5*remSize*numLabels"
          >
        </distance-comparison-chart>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import DistanceComparisonChart from '@/components/charts/DistanceComparisonChart'
export default {
  name: 'OverviewPane',
  components: {
    DistanceComparisonChart
  },
  computed: {
    ...mapState({
      categories: 'categories',
      statistics: 'statistics'
    }),
    ...mapGetters({
      demographics: 'demographics'
    }),
    chartData: function () {
      const min = []
      const max = []
      const between = []
      const average = []
      const zeros = []
      const labels = Object.keys(this.statistics)

      labels.forEach((label) => {
        min.push(this.statistics[label].min)
        between.push(this.statistics[label].max - this.statistics[label].min)
        max.push(4 - this.statistics[label].max)
        average.push(this.statistics[label].avg)
        zeros.push(0.03)
      })

      return {
        labels: labels,
        datasets: [
          {
            label: 'min',
            backgroundColor: 'rgba(255, 99, 132, 0)',
            data: min,
            // stack: 'Stack 0',
            xAxisID: 'bar-x-axis0',
            yAxisID: 'bar-y-axis0'
          },
          {
            label: 'between',
            backgroundColor: '#f87979',
            data: between,
            // stack: 'Stack 0',
            xAxisID: 'bar-x-axis0',
            yAxisID: 'bar-y-axis0'
          },
          {
            label: 'max',
            backgroundColor: 'rgba(255, 99, 132, 0)',
            data: max,
            // stack: 'Stack 0',
            xAxisID: 'bar-x-axis0',
            yAxisID: 'bar-y-axis0'
          },
          {
            label: 'avg',
            backgroundColor: 'rgba(255, 99, 132, 0)',
            data: average,
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
      const labels = Object.keys(this.statistics)
      return labels.length
    }
  },
  data: function () {
    return {
      selectedDemographic: ''
    }
  },
  methods: {
    onDemographicsSelectorClick: function (label) {
      console.log('aaaa')
      this.selectedDemographic = label
      this.$store.commit('setDemographicsSelector', label)
    }
  }
}
</script>

<style scoped>

</style>
