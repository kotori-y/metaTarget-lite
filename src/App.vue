<template>
  <Navibar/>
  <router-view v-slot="{ Component }">
    <keep-alive include="HomeIndex">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

#nav {
  position: absolute;
}

</style>
<script>
import Navibar from '@/components/Navibar'
export default {
  components: { Navibar }
}
</script>
