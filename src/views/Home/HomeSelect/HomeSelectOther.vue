<template>
<div class="normal-website">
  <div class="website" v-for="(website, index) in websites" :key="index">
      <span class="form-check-label">
        {{ website }}
      </span>
    <Mask @click="select"></Mask>
  </div>
</div>
</template>

<script lang="ts">
import './style.css'
import { select } from '@/views/Home/HomeSelect/select'
import { defineComponent } from 'vue'
import Mask from '@/components/Mask.vue'

export default defineComponent({
  name: 'HomeSelectOther',
  components: { Mask },
  setup () {
    const websites = [
      'SEA', 'Swiss', 'PassOnline', 'TargetHunter', 'TargetNet'
    ]

    return {
      websites,
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
