<template>
  <div>
    <div class="selector">
      <v-chip
        v-for="(value, label) in statistics"
        :key="label"
        @click="onDemographicsSelectorClick(label)">
        {{label}}
      </v-chip>
    </div>
    <div class="chart">
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'OverviewPane',
  computed: {
    ...mapState({
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
