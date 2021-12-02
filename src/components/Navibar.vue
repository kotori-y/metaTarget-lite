<template>
  <div id="navi">
    <router-link class="navi-item" to="/">Home</router-link>
    <router-link class="navi-item" to="/result">Result</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navibar'
})
</script>

<style scoped>

#navi {
  position: relative;
  z-index: 999;
  background-color: #1f1818;
  width: 100%;
  height: 4vh;
  display: flex;
}

.navi-item {
  line-height: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  background: #dcdbd7;
  text-decoration: none;
  color: #585555;
  font-size: 26px;
}

.navi-item.active {
  background-color: rgb(64, 63, 63);
  color: rgb(252, 236, 182);
  font-weight: 900;
}

/* one item */
.navi-item:first-child:nth-last-child(1) {
  /* -or- li:only-child { */
  width: 100vw;
}

/* two items */
.navi-item:first-child:nth-last-child(2),
.navi-item:first-child:nth-last-child(2) ~ .navi-item {
  width: 50vw;
}

</style>
