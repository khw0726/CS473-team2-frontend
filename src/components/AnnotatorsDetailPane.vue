<template>
  <v-col md="12" class="annotators--table">
    <v-simple-table>
      <v-simple-table
        dense
        fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Worker ID</th>
              <th class="text-left">Age group</th>
              <th class="text-left">Gender</th>
              <th class="text-left">Ethnicity</th>
              <th class="text-left">Education</th>
              <th class="text-left">Maritial</th>
              <th class="text-left">Income</th>
              <th class="text-left">Employment</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="value in filteredAnnotators" :key="value.worker_id">
              <td>{{ value.worker_id }}</td>
              <td>{{ value.age }}</td>
              <td>{{ value.gender }}</td>
              <td>{{ value.ethnicity }}</td>
              <td>{{ value.education }}</td>
              <td>{{ value.marital }}</td>
              <td>{{ value.income }}</td>
              <td>{{ value.employment }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-simple-table>
  </v-col>
</template>
<script>
export default {
  name: 'AnnotatorsDetailPane',
  props: {
    annotators: {
      type: Array
    },
    value: {
      type: Number
    }
  },
  computed: {
    filteredAnnotators: function () {
      return this.annotators.filter((a) => {
        return a.value === this.value
      })
    }
  }
}
</script>
<style scoped>
.annotators--table {
  max-height: 50vh;
  overflow: scroll;
  scrollbar-width: none;
}
.annotators--table::-webkit-scrollbar {
  display: none;
}
</style>
