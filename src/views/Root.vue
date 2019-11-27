<template>
  <v-container fluid>
    <v-row>
      <v-col md="3">
        <OverviewPane></OverviewPane>
      </v-col>
      <v-col md="9">
        <TasksPane></TasksPane>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import OverviewPane from '@/components/OverviewPane.vue'
import TasksPane from '@/components/TasksPane.vue'

export default {
  name: 'root',
  mounted: function () {
    this.$store.dispatch('fetchStatistics')
  },
  components: {
    OverviewPane,
    TasksPane
  }
}
</script>
