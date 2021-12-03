<template>
  <div class="mask">
    <span>{{ msg }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Mask',
  props: {
    msg: String
  }
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

.mask span {
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: fantasy;
}

</style>
