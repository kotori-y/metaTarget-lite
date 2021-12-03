<template>
  <div :class="{'input-mol': true, active: nowStatus}">
    <label v-show="nowStatus" for="single-smiles">Input your SMILES following...</label>
    <input v-show="nowStatus" id="single-smiles" type="text" placeholder="Input your SMILES here...">
    <HomeInputButton v-show="nowStatus"></HomeInputButton>
    <Mask v-show="!nowStatus" @click="adjustedWidth"></Mask>
  </div>
</template>

<script lang="ts">
import './style.css'
import store from '@/store'
import { computed, defineComponent } from 'vue'
import HomeInputButton from '@/views/Home/HomeInput/HomeInputButton.vue'
import Mask from '@/components/Mask.vue'

export default defineComponent({
  name: 'HomeInputSingle',
  components: { Mask, HomeInputButton },
  setup () {
    // Adjusted width
    const nowStatus = computed(() => store.state.inputActiveStatus[0])
    function adjustedWidth () {
      store.dispatch('exchange_input_status', { nowStatus: nowStatus.value })
    }

    return {
      nowStatus,
      adjustedWidth
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
  background: rgba(250, 235, 215, 0.7);
  font-size: 20px;
  outline: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

</style>
