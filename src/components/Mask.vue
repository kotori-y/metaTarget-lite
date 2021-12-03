<template>
  <div class="mask"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Mask'
})
</script>

<style scoped>

.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  cursor: pointer;
  border-radius: 10px;
  z-index: 999;
}

</style>
