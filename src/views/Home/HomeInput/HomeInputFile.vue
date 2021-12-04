<template>
  <div :class="{'input-mol': true, active: nowStatus}">
    <div class="file-container" v-show="nowStatus" >
      <input type="file" :class="{'custom-file-input': true, active: selected}" id="file" accept=".txt" @change="handleFileChange">
      <span>{{ fileName }}</span>
    </div>
    <HomeInputButton v-show="nowStatus" :submit="start" :not-allowed="!allowed"></HomeInputButton>
    <Mask v-show="!nowStatus" @click="adjustedWidth" :msg="maskMsg"></Mask>
  </div>
</template>

<script lang="ts">
import './style.css'
import store from '@/store'
import { defineComponent, computed, ref } from 'vue'
import Mask from '@/components/Mask.vue'
import HomeInputButton from '@/views/Home/HomeInput/HomeInputButton.vue'
import { getCurrentTime } from '@/views/Home/HomeInput/scripts/time'
import { query } from '@/views/Home/HomeInput/scripts/queryMultiMol'
import { loopQuery } from '@/views/Home/HomeInput/scripts/loopQuery'

export default defineComponent({
  name: 'HomeInputFile',
  components: { HomeInputButton, Mask },
  setup () {
    // Adjusted width
    const nowStatus = computed(() => store.state.inputActiveStatus[1])
    function adjustedWidth () {
      store.dispatch('exchange_input_status')
    }

    // listening whether select a file
    const nSelected = computed(() => Object.values(store.state.selectedSites).some(site => site))
    const selected = computed(() => store.state.fileSelected)
    const allowed = computed(() => selected.value && nSelected.value)
    const fileName = ref('')

    function handleFileChange (e: Event) {
      const files: FileList = (e.target as HTMLInputElement).files as FileList
      if (files.length > 0) {
        const file = files[0]
        fileName.value = file.name
        store.dispatch('change_status', { name: 'file' })
      }
    }

    // mask msg
    const maskMsg = 'SMILES File'

    // generate a new task
    function addTask (site: string): number {
      const task = {
        index: store.state.totalTasks + 1,
        name: 'myTask',
        date: getCurrentTime(),
        type: 'FILE',
        input: fileName.value,
        sites: site,
        status: false
      }
      store.dispatch('add_task', task)
      return task.index
    }

    // submit
    async function submit (site: string) {
      const index = addTask(site)
      const file = document.querySelector('#file') as HTMLInputElement
      const files: FileList = file.files as FileList
      if (files.length > 0) {
        const token = query(files[0], site)
        console.log(token)
        const result = JSON.parse(await loopQuery(token))
        await store.dispatch('update_task', { index })
        await store.dispatch('record_result', {
          index,
          result
        })
      }
    }

    function start () {
      for (const [site, value] of Object.entries(store.state.selectedSites)) {
        if (value) submit(site)
      }
      store.dispatch('change_mention_status')
      store.dispatch('clear_selected')
    }

    return {
      nowStatus,
      maskMsg,
      selected,
      allowed,
      fileName,
      adjustedWidth,
      start,
      handleFileChange
    }
  }
})
</script>

<style scoped>

.file-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.input-mol span {
  position: relative;
  font-size: 18px;
  font-weight: 500;
  top: -3vh;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}

.custom-file-input {
  visibility: hidden;
  position: relative;
  top: 3vh;
  width: 50vw;
}

.custom-file-input::before {
  content: "";
  background-image: url("../../../assets/file-unselected.svg");
  display: inline-block;
  border: 2px dashed #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  /*text-shadow: 1px 1px #fff;*/
  font-weight: 700;
  font-size: 10pt;
  visibility: initial;
  color: bisque;
  height: 15vh;
  width: 50vw;
  background-size: 7%;
  background-repeat: no-repeat;
  background-position: 50% 23%;
}

.custom-file-input.active::before {
  background-image: url("../../../assets/file-selected.svg");
}

.custom-file-input:hover::before {
  border-color: black;
}

.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}

</style>
