<template>
  <div class="website-container">
    <HomeSelectOther/>
    <HomeSelectPPB2/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeSelectOther from '@/views/Home/HomeSelect/HomeSelectOther.vue'
import HomeSelectPPB2 from '@/views/Home/HomeSelect/HomeSelectPPB2.vue'

export default defineComponent({
  name: 'HomeSelectIndex',
  components: { HomeSelectPPB2, HomeSelectOther }
})
</script>

<style scoped>

.website-container {
  position: relative;
  height: 50vh;
  width: 91%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(232, 232, 232, 0.5);
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

</style>
