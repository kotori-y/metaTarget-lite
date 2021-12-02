<template>
  <div class="input-container">
    <HomeInputSingle/>
    <HomeInputFile/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeInputSingle from '@/views/Home/HomeInput/HomeInputSingle.vue'
import HomeInputFile from '@/views/Home/HomeInput/HomeInputFile.vue'

export default defineComponent({
  name: 'HomeInputIndex',
  components: { HomeInputFile, HomeInputSingle }
})
</script>

<style scoped>

.input-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40%;
}

</style>
