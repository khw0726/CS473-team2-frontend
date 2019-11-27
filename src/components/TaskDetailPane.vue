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
    overallDistribution: {
      type: Array,
      default: function () {
        return [0, 4, 3, 1, 0]
      }
    },
    selectedDistribution: {
      type: Array,
      default: function () {
        return [0, 3, 0, 0, 0]
      }
    }
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
