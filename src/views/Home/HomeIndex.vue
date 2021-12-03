<template>
  <div id="home">
    <div class="data-container">
      <HomeInputIndex/>
      <HomeSelectIndex/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeInputIndex from '@/views/Home/HomeInput/HomeInputIndex.vue'
import HomeSelectIndex from '@/views/Home/HomeSelect/HomeSelectIndex.vue'

export default defineComponent({
  name: 'HomeIndex',
  components: { HomeSelectIndex, HomeInputIndex }
})
</script>

<style scoped>

#home {
  position: relative;
  background-image: url("../../assets/bg.png");
  background-size: cover;
  height: 96vh;
  width: 100vw;
}

.data-container {
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  top: 5vh;
  bottom: 5vh;
  left: 5vw;
  right: 5vw;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

</style>
