<template>
<div class="mention-container" v-show="showMention">
  <div class="mention">
    <p> {{ msg }} </p>
  </div>
</div>
</template>

<script lang="ts">
import store from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Mention',
  props: {
    msg: String
  },
  setup () {
    const showMention = computed(() => store.state.showMention)
    return {
      showMention
    }
  }
})
</script>

<style scoped>

.mention-container {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 998;
}

.mention {
  position: absolute;
  width: 30vw;
  height: 10vh;
  background: rgba(194, 198, 201, 0.87);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}

.mention p {
  max-width: 24vw;
  position: absolute;
  width: 24vw;
  font-size: 18px;
  font-weight: 900;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.mention .btn {
  position: absolute;
  bottom: 1vh;
  width: 30vw;
  right: 10vw;
}

</style>
