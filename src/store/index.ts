import { createStore } from 'vuex'

interface Task {
  index: number
  name: string,
  date: string,
  type: string,
  input: string,
  sites: Array<string>
  status: boolean
}

const store = createStore({
  state: {
    inputActiveStatus: [true, false] as [boolean, boolean],
    selectedSites: [] as Array<string>,
    tasks: [] as Array<Task>,
    totalTasks: 0 as number
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
    },
    UPDATE_TASK (state, params) {
      state.totalTasks++
      params.index = state.totalTasks
      state.tasks.push(params as Task)
    }
  },
  actions: {
    exchange_input_status (context) {
      context.commit('EXCHANGE_INPUT_STATUS')
    },
    update_selected_websites (context, params: {site: string, select: boolean}) {
      context.commit('UPDATE_SELECTED_WEBSITES', params)
    },
    update_task (context, params) {
      context.commit('UPDATE_TASK', params)
    }
  },
  modules: {
  }
})

export default store
