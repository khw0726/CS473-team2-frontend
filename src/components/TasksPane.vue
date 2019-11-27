<template>
  <div>
    <div class="selector">
      <v-chip v-for="(value, label) in demographics" :key="label">
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
import { mapGetters, mapState } from 'vuex'
import TaskDetailPane from '@/components/TaskDetailPane.vue'
export default {
  name: 'TasksPane',
  components: {
    TaskDetailPane
  },
  computed: {
    ...mapState({
      images: 'images'
    }),
    ...mapGetters({
      demographics: 'demographics'
    })
  },
  methods: {
    onSelectImage: function (image) {
      this.selectedImage = image
    }
  },
  data: function () {
    return {
      selectedImage: {}
    }
  }
}
</script>

<style scoped>

</style>
