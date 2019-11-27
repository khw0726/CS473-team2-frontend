import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statistics: {
      age: {
        '18-24': 0,
        '25-34': 3,
        '35-44': 2,
        '45-54': 2,
        '55-64': 1
      }
    },
    demographicsSelector: ''
  },
  getters: {
    demographics: (state, getters) => {
      return state.statistics[state.demographicsSelector]
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
