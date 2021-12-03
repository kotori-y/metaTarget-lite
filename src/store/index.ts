import { createStore } from 'vuex'

const store = createStore({
  state: {
    inputActiveStatus: [true, false] as [boolean, boolean]
  },
  mutations: {
    EXCHANGE_INPUT_STATUS (state) {
      const tmp = state.inputActiveStatus
      state.inputActiveStatus = tmp.map(elem => !elem) as [boolean, boolean]
    }
  },
  actions: {
    exchange_input_status (context, params: {nowStatus: boolean}) {
      if (!params.nowStatus) {
        context.commit('EXCHANGE_INPUT_STATUS')
      }
    }
  },
  modules: {
  }
})

export default store
