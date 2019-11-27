<template>
  <div>
    <div class="selector">
      <v-chip v-for="(value, label) in demographics" :key="label">
        {{label}}
      </v-chip>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TasksPane',
  computed: {
    ...mapGetters({
      demographics: 'demographics'
    })
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
