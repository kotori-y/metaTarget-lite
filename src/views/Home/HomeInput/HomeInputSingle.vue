<template>
  <div class="input-mol active" @click="adjustedWidth" ref="container">
    <label for="single-smiles">Input your SMILES following...</label>
    <input id="single-smiles" type="text" placeholder="Input your SMILES here...">
    <HomeInputButton/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HomeInputButton from '@/views/Home/HomeInput/HomeInputButton.vue'

export default defineComponent({
  name: 'HomeInputSingle',
  components: { HomeInputButton },
  setup () {
    // Adjusted width
    const container = ref(null)
    function adjustedWidth ($event: Event) {
      console.log($event.target, container)
    }

    return {
      container,
      adjustedWidth
    }
  }
})
</script>

<style scoped>

.input-mol {
  width: 15%;
  margin: 3vh 4vw;
  background: rgba(250, 235, 215, 0.7);
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.input-mol.active {
  width: 80%;
}

.input-mol label {
  font-size: 24px;
  font-weight: 500;
}

#single-smiles {
  width: 90%;
  border: none;
  background: rgba(250, 235, 215, 0.7);
  font-size: 20px;
  outline: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

</style>
