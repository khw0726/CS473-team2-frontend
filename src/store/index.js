import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API_URL = 'https://cs489.hyunwoo.me:8443'

// const sortObject = function (o) {
//   const ordered = {}
//   Object.keys(o).sort().forEach(function (key) {
//     ordered[key] = o[key]
//   })
//   return ordered
// }

export default new Vuex.Store({
  state: {
    categories: null,
    imageList: [],
    demographics: null,
    selectedImage: {
      id: '',
      url: '',
      overallDistribution: [],
      selectedDistribution: []
    },
    API_URL: API_URL
  },
  getters: {
  },
  mutations: {
    setDemographics: (state, payload) => {
      // console.log(sortObject(payload))
      state.demographics = payload
    },
    setCategories: (state, payload) => {
      state.categories = payload.categories
    },
    setImageList: (state, payload) => {
      if (payload) {
        const imageList = []
        for (const img of Object.keys(payload)) {
          imageList.push({
            id: img,
            distance: payload[img]
          })
        }
        imageList.sort((a, b) => {
          return b.distance - a.distance
        })
        state.imageList = imageList
      } else {
        state.imageList = []
      }
    },
    setSelectedImage: (state, payload) => {
      if (payload) {
        state.selectedImage = payload
      } else {
        state.selectedImage = {
          id: '',
          url: '',
          overallDistribution: [],
          selectedDistribution: []
        }
      }
    }
  },
  actions: {
    fetchCategories: async function ({ commit }) {
      const res = await axios.get(`${API_URL}/categories/`)
      commit('setCategories', res.data)
    },
    fetchDemographics: async function ({ commit }, category) {
      const res = await axios.get(`${API_URL}/categories/${category}/`)
      commit('setDemographics', res.data)
      commit('setImageList', [])
      commit('setSelectedImage', null)
    },
    fetchImages: async function ({ commit }, group) {
      const res = await axios.get(`${API_URL}/groups/${group}/`)
      commit('setImageList', res.data)
      commit('setSelectedImage', null)
    },
    fetchImage: async function ({ commit }, { img, group }) {
      const res = await axios.get(`${API_URL}/img/${img}/${group}/`)
      commit('setSelectedImage', res.data)
    }
    // fetchStatistics: async function () {
    //   const res = this.$axios.get('http://cs489.hyunwoo.me/api/statistics')
    // }
  },
  modules: {
  }
})
