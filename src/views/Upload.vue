<template>
  <v-container fluid>
    <v-row>
      <v-col md="12">
        Name your dataset
        <v-input></v-input>
        Upload your worker information
        <v-file-input></v-file-input>
        Upload your annoation information
        <v-file-input></v-file-input>
        Upload your data
        <v-file-input></v-file-input>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'upload',
  mounted: async function () {
  },
  components: {

  }
}
</script>
