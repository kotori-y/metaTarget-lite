<template>
<div class="input-button">
  <button type="button" class="btn btn-outline-dark active" @click="fillExample">Example</button>
  <button type="button" :class="{btn:true, 'btn-outline-success': true, disabled: notAllowed, active: !notAllowed}" @click.prevent="submit">Submit</button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeInputButton',
  props: {
    notAllowed: Boolean,
    fillExample: Function,
    submit: Function
  }
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

.btn:focus,.btn:active {
  outline: none !important;
  box-shadow: none;
}

</style>
