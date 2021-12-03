<template>
  <div id="task">
    <div class="task row-1">
      <span class="index">#1 My Task</span>
      <span class="time">2021-12-03 21:35:17</span>
      <span class="tag">SMILES: <span class="content">CCCCCCCCC</span></span>
      <span class="site">Site: <span class="site-name">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span></span>
      <TaskLoader/>
    </div>
    <div class="task row-2">
      <span class="index">#1 My Task</span>
      <span class="time">2021-12-03 21:35:17</span>
      <span class="tag">SMILES: <span class="content">CCCCCCCCC</span></span>
      <span class="site">Site: <span class="site-name">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span></span>
      <div class="download"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskLoader from '@/views/Tasks/TaskLoader.vue'

export default defineComponent({
  name: 'TaskIndex',
  components: { TaskLoader }
})
</script>

<style scoped>

#task {
  position: relative;
  height: 96vh;
  width: 100vw;
  background-image: url("../../assets/bg.png");
  background-size: cover;
  overflow: scroll;
  display: grid;
  grid-template-columns: 45vw 45vw;
  grid-column-gap: 8vw;
}

.task {
  /*position: relative;*/
  background: rgba(215, 226, 226, 0.72);
  height: 17vh;
  margin-top: 5vh;
  text-indent: 1vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
}

.task.row-1 {
  margin-left: 5vw;
}

.task.row-2 {
  margin-right: 5vw;
}

.task span {
  text-align: left;
  font-family: monospace;
}

.index {
  font-size: 18px;
  font-weight: bolder;
}

.tag {
  font-weight: bold;
}

.time {
  font-size: 12px;
}

.content {
  font-weight: 300;
}

.site {
  word-break: break-all;
  max-width: 30vw;
}

.site-name {
  font-size: 12px;
}

.download {
  background-image: url("../../assets/download.svg");
  height: 6vh;
  width: 6vh;
  background-size: cover;
  position: absolute;
  right: 3vw;
}

</style>
