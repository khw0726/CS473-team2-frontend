<template>
  <div>
    <div class="selector">
      <v-chip
        v-for="(value, label) in categories"
        :key="label"
        @click="onDemographicsSelectorClick(label)"
        color="purple"
        text-color="white"
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
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'OverviewPane',
  computed: {
    ...mapState({
      categories: 'categories',
      statistics: 'statistics'
    }),
    ...mapGetters({
      demographics: 'demographics'
    })
  },
  data: function () {
    return {
    }
  },
  methods: {
    onDemographicsSelectorClick: function (label) {
      console.log('aaaa')
      this.$store.commit('setDemographicsSelector', label)
    }
  }
}
</script>

<style scoped>

</style>
