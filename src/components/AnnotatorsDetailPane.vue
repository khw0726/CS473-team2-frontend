<template>
  <v-col md="12">
    <v-simple-table>
      <v-simple-table
        dense
        fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <!-- <th class="text-left">Worker ID</th>
              <th class="text-left"># of workers</th>
              <th class="text-left">Min. Distance</th>
              <th class="text-left">Max. Distance</th>
              <th class="text-left">Avg. Distance</th> -->
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="(value, label) in demographics" :key="label">
              <td>{{ label }}</td>
              <td>{{ value.count }}</td>
              <td>{{ Math.round(value.min * 100) / 100 }}</td>
              <td>{{ Math.round(value.max * 100) / 100 }}</td>
              <td>{{ Math.round(value.avg * 100) / 100  }}</td>
            </tr> -->
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
    }
  }
}
</script>
