<template>
  <div class="home">
    <OverviewPane></OverviewPane>
    <TasksPane></TasksPane>
  </div>
</template>

<script>
// @ is an alias to /src
import OverviewPane from '@/components/OverviewPane.vue'
import TasksPane from '@/components/TasksPane.vue'

export default {
  name: 'root',
  components: {
    OverviewPane,
    TasksPane
  }
}
</script>
