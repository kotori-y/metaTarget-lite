<template>
  <div :class="{'input-mol': true, active: nowStatus}">
    <div class="file-container" v-show="nowStatus" >
      <input type="file" class="custom-file-input" id="file" accept=".text/.csv">
      <span>Upload or drop your .xml file</span>
    </div>
    <HomeInputButton v-show="nowStatus"></HomeInputButton>
    <Mask v-show="!nowStatus" @click="adjustedWidth" :msg="maskMsg"></Mask>
  </div>
</template>

<script lang="ts">
import './style.css'
import store from '@/store'
import { defineComponent, computed } from 'vue'
import Mask from '@/components/Mask.vue'
import HomeInputButton from '@/views/Home/HomeInput/HomeInputButton.vue'

export default defineComponent({
  name: 'HomeInputFile',
  components: { HomeInputButton, Mask },
  setup () {
    // Adjusted width
    const nowStatus = computed(() => store.state.inputActiveStatus[1])
    function adjustedWidth () {
      store.dispatch('exchange_input_status')
    }

    // mask msg
    const maskMsg = 'SMILES File'

    return {
      nowStatus,
      maskMsg,
      adjustedWidth
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
