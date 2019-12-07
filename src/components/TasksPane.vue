<template>
  <div>
    <div>
      <v-divider></v-divider>
      <p class="font-weight-bold">RESULTS BY EACH TASK</p>
      <v-divider></v-divider>
      <div class="float-xl-left"></div><br>
    </div>
    <div class="selector">
      <v-chip v-for="(value, label) in demographics" :key="label"
        @click="onDemographicsSelectorClick(label)"
        :color="selectedDemographic === label ? 'purple lighten-5' : ''"
        :text-color="selectedDemographic === label ? 'purple darken-3' : ''">
        {{label}}
      </v-chip>
    </div>
    <v-row>
      <v-col md="2">
        <v-btn v-for="image in images" :key="image.id" @click="onSelectImage(image)">
          {{image.id}}
        </v-btn>
      </v-col>
      <v-col md="10">
        <task-detail-pane
          :imageURL="selectedImage.url || ''"
          :imageID="selectedImage.id || ''"></task-detail-pane>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import TaskDetailPane from '@/components/TaskDetailPane.vue'
export default {
  name: 'TasksPane',
  components: {
    TaskDetailPane
  },
  computed: {
    ...mapState({
      images: 'images',
      demographics: 'demographics'
    })
  },
  methods: {
    onSelectImage: function (image) {
      this.selectedImage = image
    },
    onDemographicsSelectorClick: function (label) {
      this.selectedDemographic = label
      this.$store.dispatch('fetchImages')
    }
  },
  data: function () {
    return {
      selectedImage: {},
      selectedDemographic: ''
    }
  }
}
</script>

<style scoped>

</style>
