<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      >
      <div class="d-flex align-center">
        Bias Explorer
      </div>
      <v-spacer>
      </v-spacer>
      <v-dialog
        v-model="dialog"
        width="50%">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-help</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            Distance measure
          </v-card-title>
          <v-card-text>
            For each image, the difference between the distribution of the annotations from everyone and those from the selected population is computed with the Wasserstein distance (also known as earth mover's distance).
            For detailed information, please refer to the <a target="_blank" href="https://en.wikipedia.org/wiki/Earth_mover%27s_distance">Wikipedia article</a> on the Wasserstein distance.
          </v-card-text>
          <v-card-actions>
            <v-spacer>
            </v-spacer>
            <v-btn text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
    dialog: false
  })
}
</script>
