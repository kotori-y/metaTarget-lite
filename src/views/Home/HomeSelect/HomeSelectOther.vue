<template>
<div class="normal-website">
  <div :class="{ website: true, active: siteStatus[website] }" v-for="(website, index) in websites" :key="index">
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
  name: 'HomeSelectOther',
  components: { Mask },
  setup () {
    const websites = [
      'SEA', 'Swiss', 'PassOnline', 'TargetHunter', 'TargetNet'
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

.normal-website {
  height: 30%;
  display: flex;
  justify-content: space-around;
}

</style>
