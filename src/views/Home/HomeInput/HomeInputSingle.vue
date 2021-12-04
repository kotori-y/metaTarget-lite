<template>
  <div :class="{'input-mol': true, active: nowStatus}">
    <label v-show="nowStatus" for="single-smiles">Input your SMILES following...</label>
    <input v-show="nowStatus" v-model="smiles" id="single-smiles" type="text" placeholder="Input your SMILES here...">
    <HomeInputButton v-show="nowStatus" :not-allowed="!allowed" :fill-example="fillExample" :submit="start"></HomeInputButton>
    <Mask v-show="!nowStatus" @click="adjustedWidth" :msg="maskMsg"></Mask>
  </div>
</template>

<script lang="ts">
import './style.css'
import store from '@/store'
import { computed, defineComponent, ref } from 'vue'
import HomeInputButton from '@/views/Home/HomeInput/HomeInputButton.vue'
import Mask from '@/components/Mask.vue'
import { loopQuery } from '@/views/Home/HomeInput/scripts/loopQuery'
import { query } from '@/views/Home/HomeInput/scripts/querySingleMol'
import { getCurrentTime } from '@/views/Home/HomeInput/scripts/time'

export default defineComponent({
  name: 'HomeInputSingle',
  components: { Mask, HomeInputButton },
  setup () {
    // Adjusted width
    const nowStatus = computed(() => store.state.inputActiveStatus[0])
    function adjustedWidth () {
      store.dispatch('exchange_input_status', { nowStatus: nowStatus.value })
    }

    // listening input
    const smiles = ref('')
    const nSelected = computed(() => Object.values(store.state.selectedSites).some(site => site))
    const allowed = computed(() => smiles.value && nSelected.value)

    // mask msg
    const maskMsg = 'Single SMILES'

    // button function
    function fillExample () {
      smiles.value = 'CC1=CN=C(C(=C1OC)C)CS(=O)C2=NC3=C(N2)C=C(C=C3)OC'
    }

    // generate a new task
    function addTask (site: string): number {
      const task = {
        index: store.state.totalTasks + 1,
        name: 'myTask',
        date: getCurrentTime(),
        type: 'SMILES',
        input: smiles.value,
        sites: site,
        status: false
      }
      store.dispatch('add_task', task)
      return task.index
    }

    // submit
    async function submit (site: string) {
      const index = addTask(site)
      const token = query(smiles.value, site)
      console.log(token)
      const result = JSON.parse(await loopQuery(token))
      await store.dispatch('update_task', { index })
      await store.dispatch('record_result', {
        index,
        result
      })
    }

    function start () {
      for (const [site, value] of Object.entries(store.state.selectedSites)) {
        console.log(site, value)
        if (value) submit(site)
      }
      smiles.value = ''
      store.dispatch('clear_selected')
    }

    return {
      nowStatus,
      smiles,
      allowed,
      maskMsg,
      adjustedWidth,
      fillExample,
      start
    }
  }
})
</script>

<style scoped>

.input-mol label {
  font-size: 24px;
  font-weight: 500;
}

#single-smiles {
  width: 90%;
  border: none;
  background: rgba(232, 232, 232, 0.7);
  font-size: 20px;
  outline: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

</style>
