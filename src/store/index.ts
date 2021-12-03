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
    totalTasks: 0 as number,
    cachedResult: new Map() as Map<number, JSON>
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
    ADD_TASK (state, params: Task) {
      state.totalTasks++
      state.tasks.push(params as Task)
    },
    UPDATE_TASK (state, params: {index: number}) {
      state.tasks.map(task => {
        if (task.index === params.index) {
          task.status = true
        }
        return task
      })
    },
    RECORD_RESULT (state, params: {index: number, result: JSON}) {
      state.cachedResult.set(params.index, params.result)
    }
  },
  actions: {
    exchange_input_status (context) {
      context.commit('EXCHANGE_INPUT_STATUS')
    },
    update_selected_websites (context, params: {site: string, select: boolean}) {
      context.commit('UPDATE_SELECTED_WEBSITES', params)
    },
    add_task (context, params: Task) {
      context.commit('ADD_TASK', params)
    },
    update_task (context, params: {index: number}) {
      context.commit('UPDATE_TASK', params)
    },
    record_result (context, params: {index: number, result: JSON}) {
      context.commit('RECORD_RESULT', params)
    }
  },
  modules: {
  }
})

export default store
