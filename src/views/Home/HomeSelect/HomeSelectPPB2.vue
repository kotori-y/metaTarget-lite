<template>
  <div class="ppb2-website">
    <div :class="{ website: true, active: siteStatus[website] }" v-for="(website, index) in websites.slice(0, 4)" :key="index">
      <span :class="{ 'form-check-label': true, active: siteStatus[website] }">
        {{ website }}
      </span>
      <Mask @click="select"></Mask>
    </div>
  </div>
  <div class="ppb2-website">
    <div :class="{ website: true, active: siteStatus[website] }" v-for="(website, index) in websites.slice(4, )" :key="index">
      <span :class="{ 'form-check-label': true, active: siteStatus[website] }">
        {{ website }}
      </span>
      <Mask @click="select"></Mask>
    </div>
  </div>
</template>

<script lang="ts">
import './style.css'
import store from '@/store'
import { select } from '@/views/Home/HomeSelect/select'
import { computed, defineComponent } from 'vue'
import Mask from '@/components/Mask.vue'

export default defineComponent({
  name: 'HomeSelectPPB2',
  components: { Mask },
  setup () {
    const websites = [
      'DNN(ECfp4)', 'NB(ECfp4)', 'NN(MQN) & NB(ECfp4)', 'NN(Xfp) & NB(ECfp4)',
      'NN(ECfp4) & NB(ECfp4)', 'NN(MQN)', 'NN(Xfp)', 'NN(ECfp4)'
    ]

    const siteStatus = computed(() => store.state.selectedSites)

    return {
      websites,
      siteStatus,
      select
    }
  }
})
</script>

<style scoped>

.ppb2-website {
  height: 30%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.website {
  width: 20%;
}

</style>
