<template>
  <div id="task">
    <div v-for="(task, idx) in tasks" :key="idx" class="task">
      <span class="index">#{{ task.index }} {{ task.sites }}</span>
      <span class="time">Created on: {{ task.date }}</span>
      <span class="tag">{{ task.type }}: <span class="content">{{ task.input }}</span></span>
      <TaskLoader v-if="!task.status"></TaskLoader>
      <div class="download" v-if="task.status" @click="save(task.index)"></div>
    </div>
  </div>
  <Mention msg="Saved"></Mention>
</template>

<script lang="ts">
import store from '@/store'
import { computed, defineComponent } from 'vue'
import TaskLoader from '@/views/Tasks/TaskLoader.vue'
import { download } from '@/views/Tasks/download'
import Mention from '@/components/Mention.vue'

export default defineComponent({
  name: 'TaskIndex',
  components: { Mention, TaskLoader },
  setup () {
    const tasks = computed(() => store.state.tasks)

    function save (index: number) {
      const jsonData = store.state.cachedResult.get(index) as JSON
      download(jsonData)
    }

    return {
      tasks,
      save
    }
  }
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
}

.task {
  /*position: relative;*/
  background: rgba(215, 226, 226, 0.72);
  height: 17vh;
  width: 90vw;
  margin-top: 5vh;
  text-indent: 1vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
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
  cursor: pointer;
}

</style>
