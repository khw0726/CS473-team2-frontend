import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API_URL = 'http://cs489.hyunwoo.me:8000'

const sortObject = function (o) {
  const ordered = {}
  Object.keys(o).sort().forEach(function (key) {
    ordered[key] = o[key]
  })
  return ordered
}

export default new Vuex.Store({
  state: {
    categories: null,
    images: [
      {
        id: 'img01',
        url: 'https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png',
        distance: 2.6
      },
      {
        id: 'img02',
        url: 'https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png',
        distance: 2.3
      },
      {
        id: 'img03',
        url: 'https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png',
        distance: 1.8
      }
    ],
    demographics: null
  },
  getters: {
  },
  mutations: {
    setDemographics: (state, payload) => {
      // console.log(sortObject(payload))
      state.demographics = sortObject(payload)
    },
    setCategories: (state, payload) => {
      state.categories = payload.categories
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
    },
    fetchImages: async function ({ commit }, group) {
      // const res = await axios.get(`${API_URL}/img/${group}/`)
    }
    // fetchStatistics: async function () {
    //   const res = this.$axios.get('http://cs489.hyunwoo.me/api/statistics')
    // }
  },
  modules: {
  }
})
