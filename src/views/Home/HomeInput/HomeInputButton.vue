<template>
<div class="input-button">
  <button type="button" class="btn btn-outline-dark ac">Example</button>
  <button type="button" class="btn btn-outline-success">Submit</button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeInputButton'
})
</script>

<style scoped>

.input-button {
  display: flex;
  width: 90%;
  justify-content: space-around;
}

.btn {
  width: 20vh;
}
</style>
