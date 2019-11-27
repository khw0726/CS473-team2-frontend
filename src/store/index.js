import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: {
      age: {
        '18-24': 1,
        '25-34': 3,
        '35-44': 2,
        '45-54': 2,
        '55-64': 1
      },
      gender: {
        'Male': 1,
        'Female': 33
      }
    },
    demographicsSelector: '',
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
    statistics: {
      '18-24': {
        count: 4,
        min: 0.8,
        max: 2.1,
        avg: 1.6
      },
      '25-34': {
        count: 8,
        min: 0.8,
        max: 2.1,
        avg: 1.6
      },
      '35-44': {
        count: 12,
        min: 0.8,
        max: 2.1,
        avg: 1.6
      }
    }
  },
  getters: {
    demographics: (state, getters) => {
      return state.categories[state.demographicsSelector]
    }
  },
  mutations: {
    setDemographicsSelector: (state, label) => {
      state.demographicsSelector = label
    }
  },
  actions: {
    fetchStatistics: async function () {
      // const res = this.$axios.get('http://cs489.hyunwoo.me/api/statistics')
      console.log('1')
    }
  },
  modules: {
  }
})
