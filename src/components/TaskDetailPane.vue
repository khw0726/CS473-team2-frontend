<template>
  <v-card>
    <v-row>
      <v-col md="8">
        <v-img src="imageURL" width="100%">
        </v-img>
      </v-col>
      <v-col md="4">
        <div>
          chart 1
        </div>
        <div>
          chart 2
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'TaskDetailPane',
  props: {
    imageID: String,
    imageURL: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png'
    },
    overallDistribution: Array,
    selectedDistribution: Array
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
