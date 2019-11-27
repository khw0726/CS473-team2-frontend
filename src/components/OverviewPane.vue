
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
    <div class="chart">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Category</th>
              <th class="text-left">Number of workers</th>
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
          :data="chartData">
        </distance-comparison-chart>
      </div>
      <!-- <template v-for="(value, label) in statistics">
        <div :key="label">
          {{label}}
          <v-range-slider
            max="4" min="0"
            :value="[value.min, value.max]"
            thumb-label="always"
            thumb-size="15"
            readonly>
          </v-range-slider>
        </div>
      </template> -->
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
      const labels = Object.keys(this.statistics)
      console.log('a')
      labels.forEach((label) => {
        min.push(this.statistics[label].min)
        between.push(this.statistics[label].max - this.statistics[label].min)
        max.push(4 - this.statistics[label].max)
      })
      console.log(min)
      console.log(between)
      console.log(max)

      console.log('b')
      return {
        labels: labels,
        datasets: [
          {
            label: 'min',
            backgroundColor: 'rgba(255, 99, 132, 0)',
            data: min
          },
          {
            label: 'between',
            backgroundColor: '#f87979',
            data: between
          },
          {
            label: 'max',
            backgroundColor: 'rgba(255, 99, 132, 0)',
            data: max
          }
        ]
      }
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
