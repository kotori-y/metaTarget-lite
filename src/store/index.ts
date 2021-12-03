import { createStore } from 'vuex'

const store = createStore({
  state: {
    inputActiveStatus: [true, false] as [boolean, boolean],
    selectedSites: [] as Array<string>,
    tasks: [] as Array<Task>
  },
  mutations: {
    EXCHANGE_INPUT_STATUS (state) {
      const tmp = state.inputActiveStatus
      state.inputActiveStatus = tmp.map(elem => !elem) as [boolean, boolean]
    },
    UPDATE_SELECTED_WEBSITES (state, params: {site: string, select: boolean}) {
      if (params.select) {
        state.selectedSites.push(params.site)
        return
      }
      state.selectedSites = state.selectedSites.filter(site => site !== params.site)
    }
  },
  actions: {
    exchange_input_status (context) {
      context.commit('EXCHANGE_INPUT_STATUS')
    },
    update_selected_websites (context, params: {site: string, select: boolean}) {
      context.commit('UPDATE_SELECTED_WEBSITES', params)
    }
  },
  modules: {
  }
})

export default store
