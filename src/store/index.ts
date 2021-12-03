import { createStore } from 'vuex'

const store = createStore({
  state: {
    inputActiveStatus: [false, true] as [boolean, boolean]
  },
  mutations: {
    EXCHANGE_INPUT_STATUS (state) {
      const tmp = state.inputActiveStatus
      state.inputActiveStatus = tmp.map(elem => !elem) as [boolean, boolean]
    }
  },
  actions: {
    exchange_input_status (context) {
      context.commit('EXCHANGE_INPUT_STATUS')
    }
  },
  modules: {
  }
})

export default store
